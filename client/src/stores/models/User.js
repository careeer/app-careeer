/* eslint-disable */
import { observable, action } from 'mobx';
import Api from '../helpers/api';

class User {
  sessions = '/v1/sessions';
  users = '/v1/users';
  forgotPath = '/v1/forgot';
  resetPath = '/v1/reset';
  checkPath = '/v1/check';

  @observable isLoading = false;
  @observable signedIn = false;
  @observable email = null;
  @observable isAdmin = false;
  @observable hasClients = false;
  @observable incorrectEmail = false;
  @observable incorrectPassword = false;
  @observable existingEmail = false;
  @observable passwordsMissmatch = false;
  @observable reusedPassword = false;
  @observable newPassword = true;
  @observable emailExists = false;
  @observable showFooter = false;
  @observable footerMessage = '';

  @action setIsLoading(status) {
    this.isLoading = status;
  }

  @action setSignedIn(status, email) {
    this.signedIn = status;
    if (status && email) {
      this.email = email;
    }
  }

  @action clearSessionMessages() {
    this.emailExists = true;
    this.incorrectEmail = false;
    this.incorrectPassword = false;
  }

  @action clearResetMessages() {
    this.reusedPassword = false;
  }

  @action clearAccountErrorMessages() {
    this.existingEmail = false;
  }

  @action closeFooterBanner() {
    this.showFooter = false;
    this.footerMessage = '';
  }

  @action handlePasswordMissmatch() {
    this.passwordsMissmatch = true;
  }

  @action handlePasswordMatch() {
    this.passwordsMissmatch = false;
  }

  async create(email, password, password_confirmation, plan ,callBack) {
    this.existingEmail = false;
    this.setIsLoading(true);
    
    const response = await Api.post(
      this.users,
      { user: {email, password, password_confirmation, plan} },
    );

    const status = await response.status;

    console.log(response);
    if (status === 201) {
      const body = await response.json();
      const { user } = body.data;

      localStorage.setItem('token', user.authentication_token);
      localStorage.setItem('email', user.email);

      this.setIsLoading(false);
      this.setSignedIn(true, user.email);
      if (callBack) {
        callBack();
      }
    } else {
      this.existingEmail = true;
      this.setIsLoading(false);
    }
  }

  signIn(email = null, password = null, callBack) {
    this.setIsLoading(true);
    const store = {
      authentication_token: localStorage.getItem('token'),
      email: localStorage.getItem('email'),
    };

    if (email && password) {
      this.createSession(email, password, callBack);
    } else if (store.email && store.authentication_token) {
      this.signInFromStorage(store.email, callBack);
    } else {
      this.signOut(callBack);
    }
  }

  @action async signInFromStorage(email, callBack) {
    const response = await Api.get(this.sessions);
    const status = await response.status;

    if (status === 200) {
      const body = await response.json();
      const { user } = body.data;
      this.setSignedIn(true, user.email);
      this.setIsLoading(false);

      this.hasClients = user.hasClients;
      this.isAdmin = user.admin;

      if (callBack) {
        callBack();
      }
    } else {
      this.signOut(callBack);
    }
  }

  async createSession(email, password, callBack) {
    this.setIsLoading(true);

    const response = await Api.post(
      this.sessions,
      { email, password },
    );
    const status = await response.status;

    if (status === 201) {
      this.incorrectEmail = false;
      this.incorrectPassword = false;

      const body = await response.json();
      const { user } = body.data;
      localStorage.setItem('token', user.authentication_token);
      localStorage.setItem('email', user.email);

      this.setIsLoading(false);
      this.setSignedIn(true, user.email);

      this.hasClients = user.hasClients;
      this.isAdmin = user.admin;

      if (callBack) {
        callBack();
      }
    } else {
      // check credential errors
      if (status === 400) {
        this.incorrectEmail = true;
        this.incorrectPassword = false;
      } else if (status === 401) {
        this.incorrectEmail = false;
        this.incorrectPassword = true;
      }
      // clear session
      this.signOut();
    }
  }

  async destroySession(callBack) {
    this.setIsLoading(true);

    const response = await Api.delete(this.sessions);
    const status = await response.status;

    if (status === 200) {
      this.setIsLoading(false);
      this.signOut(callBack);
    }
  }

  @action signOut(callBack) {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    if (callBack) {
      callBack();
    }
    this.email = null;
    this.signedIn = false;
    this.isLoading = false;
  }

  @action async forgotPassword(inputEmail) {
    this.setIsLoading(true);

    const response = await Api.post(
      this.forgotPath,
      { email: inputEmail },
    );
    const status = await response.status;

    if (status === 200) {
      this.setIsLoading(false);
      this.footerMessage = `reset password link sent to ${inputEmail}`;
      this.showFooter = true;
    }
  }

  @action async resetPassword(password, passwordConfirmation, token, callBack) {
    this.setIsLoading(true);

    const response = await Api.post(
      this.resetPath,
      { reset_password_token: token, password: password, password_confirmation: passwordConfirmation },
    );

    const status = await response.status;

    if (status === 200) {
      this.setIsLoading(false);
      if (callBack) {
        callBack();
      }
      this.footerMessage = `password successfully reset`;
      this.showFooter = true;

    } else if (status === 422) {
      this.setIsLoading(false);
      this.reusedPassword = true;
    } else if (status === 404) {
      this.setIsLoading(false);
      if (callBack) {
        callBack();
      }
      this.footerMessage = `password reset request expired, please request a new one`;
      this.showFooter = true;
    }
  }

  @action async checkEmail(inputEmail, callBack) {
    const response = await Api.post(
      this.checkPath,
      { email: inputEmail },
    );
    const status = await response.status;

    if (status === 200) {
      this.incorrectEmail = false;
      this.emailExists = true;
      if (callBack) {
        callBack();
      }

    } else {
      this.incorrectEmail = true;
      this.emailExists = false;
    }
  }
}

export default new User();

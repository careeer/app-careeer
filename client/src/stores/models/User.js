/* eslint-disable */
import { observable, action } from 'mobx';
import Api from '../helpers/api';

class User {
  sessions = '/v1/sessions';
  users = '/v1/users';
  @observable isLoading = false;
  @observable signedIn = false;
  @observable email = null;
  @observable isAdmin = false;
  @observable hasClients = false;
  @observable incorrectPassword = false;
  @observable incorrectEmail = false;

  @action setIsLoading(status) {
    this.isLoading = status;
  }

  @action setSignedIn(status, email) {
    this.signedIn = status;
    if (status && email) {
      this.email = email;
    }
  }

  async create(email, password, password_confirmation, callBack) {
    this.setIsLoading(true);

    const response = await Api.post(
      this.users,
      { user: {email, password, password_confirmation} },
    );

    const status = await response.status;

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
      } else if (status === 401) {
        this.incorrectPassword = true;
      }
      // clear session
      this.signOut(callBack);
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
}

export default new User();

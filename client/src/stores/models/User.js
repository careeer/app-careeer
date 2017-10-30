/* eslint-disable */
import { observable, action } from 'mobx';
import Api from '../helpers/api';

class User {
  sessions = '/v1/sessions';
  users = '/v1/users';
  @observable isLoading = false;
  @observable signedIn = false;
  @observable email = null;

  @action setIsLoading(status) {
    this.isLoading = status;
  }

  @action setSignedIn(status, email) {
    this.signedIn = status;
    if (status && email) {
      this.email = email;
    }
  }

  async create(email, password, password_confirmation, history) {
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

      history.push('/freetrial');
    } else {
      // console.log("unauthorized");
    }
  }

  signIn(email = null, password = null, history) {
    const store = {
      authentication_token: localStorage.getItem('token'),
      email: localStorage.getItem('email'),
    };

    if (store.email && store.authentication_token) {
      this.signInFromStorage(store.email, history);
    } else if (email && password) {
      this.createSession(email, password, history);
    } else {
      this.signOut(history);
    }
  }

  @action async signInFromStorage(email, history) {
    const response = await Api.get(this.sessions);
    const status = await response.status;

    if (status === 200) {
      this.email = email;
      this.signedIn = true;
      this.isLoading = false;
    } else {
      this.signOut(history);
    }
  }

  async createSession(email, password, history) {
    this.setIsLoading(true);

    const response = await Api.post(
      this.sessions,
      { email, password },
    );

    const status = await response.status;

    if (status === 201) {
      const body = await response.json();
      const { user } = body.data;

      localStorage.setItem('token', user.authentication_token);
      localStorage.setItem('email', user.email);

      this.setIsLoading(false);
      this.setSignedIn(true, user.email);

      history.push('/freetrial');
    } else {
      // console.log("unauthorized");
    }
  }
  async destroySession(history) {
    this.setIsLoading(true);

    const response = await Api.delete(this.sessions);
    const status = await response.status;

    if (status === 200) {
      this.setIsLoading(false);
      this.signOut(history);
    }
  }

  @action signOut(history) {
    localStorage.removeItem('email');
    localStorage.removeItem('token');

    this.email = null;
    this.signedIn = false;
    this.isLoading = false;
    history.push('/sign_in');
  }
}

export default new User();

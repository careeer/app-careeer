/* eslint-disable */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Button } from 'semantic-ui-react';
import LoadingScreen from '../Lib/LoadingScreen';

@inject('user') @observer
class CreateForm extends Component {
  handleClick = (e) => {
    e.preventDefault();
    if (this.email.checkValidity() && this.password.checkValidity()) {
      const { user, history, selectedAccount } = this.props;

      user.create(
        this.email.value,
        this.password.value,
        this.password.value,
        selectedAccount,
        () => {history.push('/freetrial');}
      );
    }
  }

  clearErrorMessages = () => {
    this.props.user.clearAccountErrorMessages();
  }

  render() {
    const { user } = this.props;

    let errorModeEmail = "";
    if (user.existingEmail) {
      errorModeEmail = "errorMode";
    }

    return (
      <form className="createAccountForm">
        <LoadingScreen isLoading={user.isLoading} />
        <input
          required
          type="text"
          placeholder="email"
          autoComplete="email"
          className={errorModeEmail}
          onChange={this.clearErrorMessages}
          ref={(node) => { this.email = node; }}
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
        />
        {!user.existingEmail &&
          <label>invalid email address</label>
        }
        {user.existingEmail &&
          <label className="apiMessage">email already registered, please sign in</label>
        }
        <input
          required
          type="password"
          autocomplete="new-password"
          pattern=".{6,}"
          onChange={this.clearErrorMessages}
          placeholder="password (6 character min)"
          ref={(node) => { this.password = node; }}
        />
        <label>too few characters [min 6]</label>
        <Button
          content={this.props.buttonLabel}
          onClick={this.handleClick}
        />
      </form>
    );
  }
}

export default withRouter(CreateForm);

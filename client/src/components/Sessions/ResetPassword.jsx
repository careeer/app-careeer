/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Grid, Button } from 'semantic-ui-react';
import CareeerLogo from '../LandingPage/CareeerLogo';

@inject('user') @observer
export default class ResetPassword extends Component {
  state = {
    token: ''
  }

  componentWillMount() {
    const params = new URLSearchParams(this.props.location.search);
    this.setState({ token: params.get('reset_password_token')});
    history.replaceState(null, document.title, `/users/password/reset`);
  }

  handleClick = (e) => {
    e.preventDefault();
    if (this.password.checkValidity() && this.passwordRepeat.checkValidity() && (this.password.value === this.passwordRepeat.value)) {
      const { user, history } = this.props;

      user.resetPassword(
        this.password.value,
        this.passwordRepeat.value,
        this.state.token,
        () => {history.push('/signIn');;}
      );
    }
  }

  clearErrorMessages = () => {
    this.props.user.clearResetMessages();
    this.handlePasswordConfirmation();
  }

  handlePasswordConfirmation = () => {
    if (this.password.checkValidity() && this.passwordRepeat.checkValidity()) {
      if (this.password.value !== this.passwordRepeat.value) {
        this.props.user.handlePasswordMissmatch();
      } else {
        this.props.user.handlePasswordMatch();
      }
    }
  }

  render() {
    const { user } = this.props;

    let errorModePassword = "";
    let errorModePasswordConfirm = "";
    if (user.reusedPassword) {
      errorModePassword = "errorMode";
    }
    if (user.passwordsMissmatch) {
      errorModePasswordConfirm = "errorMode";
    }

    return (
      <div className="sessions">
        <CareeerLogo />
        <Grid
          textAlign="center"
          verticalAlign="middle"
        >
          <form className="sessionsForm">
            <input
              required
              type="password"
              pattern=".{6,}"
              placeholder="new password"
              className={errorModePassword}
              onChange={this.clearErrorMessages}
              ref={(node) => { this.password = node; }}
            />
            {!user.reusedPassword &&
              <label>too few characters [min 6]</label>
            }
            {user.reusedPassword &&
              <label className="apiMessage">new password must be different than current password</label>
            }
            <input
              required
              type="password"
              pattern=".{6,}"
              className={errorModePasswordConfirm}
              onChange={this.handlePasswordConfirmation}
              placeholder="repeat new password"
              ref={(node) => { this.passwordRepeat = node; }}
            />
            {!user.passwordsMissmatch &&
              <label>too few characters [min 6]</label>
            }
            {user.passwordsMissmatch &&
              <label className="apiMessage">passwords do not match</label>
            }
            <Button
              content="Reset password"
              onClick={this.handleClick}
            />
          </form>
        </Grid>
      </div>
    );
  }
}

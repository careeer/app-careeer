/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Grid, Button } from 'semantic-ui-react';

import CareeerLogo from '../Lib/CareeerLogo';
import LoadingScreen from '../Lib/LoadingScreen';
import FooterBanner from '../Lib/Banners/FooterBanner';

@inject('user') @observer
export default class New extends Component {
  handleClick = (e) => {
    e.preventDefault();
    if (this.email.checkValidity() && this.password.checkValidity()) {
      const { user, history } = this.props;

      user.signIn(
        this.email.value,
        this.password.value,
        () => {this.redirectPerRole();}
      );
    }
  }

  redirectPerRole = () => {
    const { user, history } = this.props;

    if (user.isAdmin) {
      history.push('/clients');
    } else {
      if (user.hasClients){
        history.push('/Roadmap');
      } else {
        history.push('/freetrial');
      }
    }
  }

  clearErrorMessages = () => {
    this.props.user.clearSessionMessages();
  }

  handleForgottenPassword = () => {
    const { user } = this.props;
    user.checkEmail(
      this.email.value,
      () => {user.forgotPassword(this.email.value);}
    );
  }

  handleBannerClose = () => {
    this.props.user.closeFooterBanner();
  }

  render() {
    let email;
    if (this.props.location.state){
      email = this.props.location.state.logoutEmail;
    }

    const { user } = this.props;

    let errorModeEmail = "";
    let errorModePassword = "";
    if (user.incorrectEmail) {
      errorModeEmail = "errorMode";
    }
    if (user.incorrectPassword) {
      errorModePassword = "errorMode";
    }

    return (
      <div className="sessions">
        <CareeerLogo />
        <Grid
          textAlign="center"
          verticalAlign="middle"
        >
          <LoadingScreen isLoading={user.isLoading} />
          <form className="sessionsForm">
            <input
              required
              type="text"
              placeholder="email"
              autocomplete="email"
              defaultValue={email}
              className={errorModeEmail}
              onChange={this.clearErrorMessages}
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
              ref={(node) => { this.email = node; }}
            />
            {!user.incorrectEmail &&
              <label>invalid email address</label>
            }
            {user.incorrectEmail &&
              <label className="apiMessage">invalid email address</label>
            }
            <input
              required
              type="password"
              autocomplete="current-password"
              pattern=".{6,}"
              className={errorModePassword}
              onChange={this.clearErrorMessages}
              placeholder="password (6 character min)"
              ref={(node) => { this.password = node; }}
            />
            {!user.incorrectPassword &&
              <label>too few characters [min 6]</label>
            }
            {user.incorrectPassword &&
              <label className="apiMessage">invalid password</label>
            }

            <Button
              content="Sign In"
              onClick={this.handleClick}
            />
            <label className="createAccountLabel">New to Careeer.me?</label>
            <Link to='/createAccount'>Create account</Link>
            <a
              role="link"
              tabIndex="0"
              className="forgotPasswordLink"
              onClick={this.handleForgottenPassword}
            >
              Forgot password?
            </a>
          </form>
        </Grid>
        <FooterBanner
          visible={user.showFooter}
          hideBanner={this.handleBannerClose}
          footerMessage={user.footerMessage}
        />
      </div>
    );
  }
}

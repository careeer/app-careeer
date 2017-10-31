/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Grid, Button } from 'semantic-ui-react';
import CareeerLogo from '../LandingPage/CareeerLogo';

@inject('user') @observer
export default class New extends Component {
  handleClick = (e) => {
    e.preventDefault();
    if (this.email.checkValidity() && this.password.checkValidity()) {
      const { user, history } = this.props;

      user.signIn(
        this.email.value,
        this.password.value,
        history,
      );
    }
  }

  render() {
    return (
      <div className="signInPage">
        <CareeerLogo />
        <Grid
          textAlign="center"
          verticalAlign="middle"
        >
          <form className="signInForm">
          <input
            required
            type="text"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
            placeholder="email"
            ref={(node) => { this.email = node; }}
          />
            <label>invalid email address</label>
            <input
              required
              type="password"
              pattern=".{6,}"
              placeholder="password (6 character min)"
              ref={(node) => { this.password = node; }}
            />
            <label>too few characters [min 6]</label>
            <Button
              content="Sign In"
              onClick={this.handleClick}
            />
            <label className="createAccountLabel">New to Careeer.me?</label>
            <Link to='/'>Create account</Link>
          </form>
        </Grid>
      </div>
    );
  }
}

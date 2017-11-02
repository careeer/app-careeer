/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Grid, Button } from 'semantic-ui-react';
import CareeerLogo from '../LandingPage/CareeerLogo';

@inject('user') @observer
export default class New extends Component {
  handleClick = (e) => {
    e.preventDefault();
    if (this.email.checkValidity() && this.password.checkValidity()) {
      const { user, history } = this.props;

      user.create(
        this.email.value,
        this.password.value,
        this.password.value,
        () => {history.push('/freetrial');}
      );

    }
  }

  render() {
    return (
      <div className="createAccountPage">
        <CareeerLogo />
        <Grid
          textAlign="center"
          verticalAlign="middle"
        >
          <form className="createAccountForm">
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
              content="Create account"
              onClick={this.handleClick}
            />
          </form>
        </Grid>
      </div>
    );
  }
}

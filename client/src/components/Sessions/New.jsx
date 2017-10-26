/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Grid, Button } from 'semantic-ui-react';
import CareeerLogo from '../LandingPage/CareeerLogo';

@inject('user') @observer
export default class New extends Component {
  handleClick = (e) => {
    e.preventDefault();
    const { user } = this.props;

    user.signIn(
      this.email.value,
      this.password.value,
      this.props.history,
    );
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
              type="email"
              ref={node => { this.email = node; }}
              placeholder="email"
            />
            <input
              type="password"
              ref={node => { this.password = node; }}
              placeholder="password (6 character min)"
            />
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

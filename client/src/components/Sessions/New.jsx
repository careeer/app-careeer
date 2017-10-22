/* eslint-disable */
import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import CareeerLogo from '../LandingPage/CareeerLogo';

export default class New extends Component {
  render() {
    return (
      <div className="signInPage">
        <CareeerLogo />
        <Grid
          textAlign="center"
          verticalAlign="middle"
        >
          <form className="signInForm">
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password (6 character min)"/>
            <Button
              className="createAccountButton"
              onClick={this.handleClick}
              content="Create account"
            />
          </form>
        </Grid>
      </div>
    );
  }
}

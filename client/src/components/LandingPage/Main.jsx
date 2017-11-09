import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import CareeerLogo from '../Lib/CareeerLogo';
import MainHeadline from './MainHeadline';
import Timeline from './Timeline';
import Footer from './Footer';

export default class FreeTrialWelcome extends Component {
  render() {
    return (
      <div>
        <CareeerLogo />
        <Link to="/signIn" className="signInLink">Sign In</Link>
        <Grid id="landingPage">
          <MainHeadline />
          <Grid.Row>
            <Grid.Column>
            </Grid.Column>
          </Grid.Row>

          <Timeline />

          <Grid.Row>
            <Grid.Column>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
            </Grid.Column>
          </Grid.Row>

          <Footer />
        </Grid>
      </div>
    );
  }
}

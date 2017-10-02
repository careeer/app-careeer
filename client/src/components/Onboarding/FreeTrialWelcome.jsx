/* eslint-disable */
import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import CareeerLogo from './CareeerLogo';
import WelcomeToRoadmap from './WelcomeToRoadmap';
import SuccessVideo from './SuccessVideo';
import DoneButton from './DoneButton';

import './Styles/FreeTrialWelcome.css';

export default class FreeTrialWelcome extends Component {
  handleClick = () => {
    this.props.history.push('/freetrialclient');
  };

  render() {
    return (
      <div>
        <CareeerLogo />
        <Grid
          textAlign="center"
          verticalAlign="middle"
        >
          <Grid.Column
            computer={5}
            largeScreen={5}
            tablet={8}
            widescreen={8}
            mobile={14}
          >
            <WelcomeToRoadmap />
            <Button
              color="green"
              className="buildYourRoadmap"
              onClick={this.handleClick}
              content="Build your roadmap"
            />
            <a
              className="learnMoreLink"
              href="https://careeer.me"
            >
              learn more
            </a>
          </Grid.Column>
        </Grid>
        <SuccessVideo />
      </div>
    );
  }
}

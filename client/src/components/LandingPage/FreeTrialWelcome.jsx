/* eslint-disable */
import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import CareeerLogo from '../Lib/CareeerLogo';
import WelcomeToRoadmapMessage from './WelcomeToRoadmapMessage';

export default class FreeTrialWelcome extends Component {
  handleClick = () => {
    this.props.history.push('/OnBoarding/Intro');
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
            mobile={16}
          >
            <WelcomeToRoadmapMessage />
            <Button
              color="green"
              className="buildYourRoadmap"
              onClick={this.handleClick}
              content="Build your roadmap"
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

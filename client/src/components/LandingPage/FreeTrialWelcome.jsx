/* eslint-disable */
import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import CareeerLogo from './CareeerLogo';
import WelcomeToRoadmapMessage from './WelcomeToRoadmapMessage';
import SuccessVideo from './SuccessVideo';

import './Styles/FreeTrialWelcome.css';

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
            <div>
              <a
                className="learnMoreLink"
                href="https://www.careeer.me"
              >
                learn more
              </a>
            </div>
          </Grid.Column>
        </Grid>
        <SuccessVideo />
      </div>
    );
  }
}

import React from 'react';
import { Grid } from 'semantic-ui-react';
import WaveIcon from './WaveIcon';

const IntroOnBoardingMessage = () => (
  <Grid textAlign="center">
    <Grid.Column className="introMessageGrid">
      <h2 className="introHeader">
        Hello!
      </h2>
      <p className="introMessage">
        In order to improve your experience we’d like to get to know you better
      </p>
      <WaveIcon />
      <a className="introGetStarted">
        Get Started
      </a>
    </Grid.Column>
  </Grid>
);

export default IntroOnBoardingMessage;

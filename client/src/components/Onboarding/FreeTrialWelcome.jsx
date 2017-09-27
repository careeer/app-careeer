/* eslint-disable */
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import WelcomeToRoadmap from './WelcomeToRoadmap';
import DoneButton from './DoneButton';

import './Styles/FreeTrialWelcome.css';

export default class FreeTrialWelcome extends Component {
  handleClick = () => {
    this.props.history.push('/freetrialclient');
  };

  render() {
    return (
      <Grid
        textAlign="center"
        verticalAlign="middle"
      >
        <Grid.Column
          computer={4}
          largeScreen={4}
          tablet={6}
          widescreen={8}
          mobile={14}
        >
          <WelcomeToRoadmap />
          <DoneButton
            onCheckmarkClick={this.handleClick}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

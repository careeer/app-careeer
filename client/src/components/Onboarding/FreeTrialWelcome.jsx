/* eslint-disable */
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import WelcomeToRoadmap from './WelcomeToRoadmap';
import CareeerLogo from './CareeerLogo';
import DismissButton from './DismissButton';
import DoneButton from './DoneButton';

import './Styles/FreeTrialWelcome.css';

export default class FreeTrialWelcome extends Component {
  handleClick = () => {
    this.props.history.push('/freetrialclient');
  };

  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column floated="left">
              <CareeerLogo />
            </Grid.Column>
            <Grid.Column floated="right">
              <DismissButton
                onButtonClick={this.handleClick}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid centered>
          <Grid.Row>
            <Grid.Column
              verticalAlign="middle"
              computer={4}
              largeScreen={5}
              tablet={8}
              widescreen={10}
              mobile={16}
            >
              <WelcomeToRoadmap />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <DoneButton
              onCheckmarkClick={this.handleClick}
            />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

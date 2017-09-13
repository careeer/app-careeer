/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Grid } from 'semantic-ui-react';
import ClientInput from './ClientInput';

@inject('roadmapElements')@observer
export default class DuplicateClientInput extends Component {
  componentWillMount() {
    this.props.roadmapElements.resetClientParams();
  }

  handleKeyPress = () => {
    this.props.roadmapElements.createClient();
  }

  checkIfNameIsFilled = () => {
    if (this.props.roadmapElements.hasClientName) {
      this.props.history.push(`/${this.props.roadmapElements.currentClientSlug}`);
    }
  }

  render() {
    this.checkIfNameIsFilled();
    return (
      <Grid.Column>
        <ClientInput
          currentClient={this.props.roadmapElements.currentClient || ''}
          handleClientInputChange={this.props.roadmapElements.handleClientInputChange}
          createClient={this.handleKeyPress}
        />
      </Grid.Column>
    );
  }
}

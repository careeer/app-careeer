/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Grid } from 'semantic-ui-react';
import ClientInput from './ClientInput';

@inject('roadmapElements') @observer
export default class DuplicateClientInput extends Component {
  componentWillMount() {
    this.props.roadmapElements.resetClientParams();
    history.replaceState(null, document.title, "/clients");
  }

  handleKeyPress = () => {
    this.props.roadmapElements.copyClient(this.props.match.params.clientId, this.props.roadmapElements.currentClient);
  }

  checkIfNameIsFilled = () => {
    if (this.props.roadmapElements.hasClientName) {
      this.props.history.push(`/${this.props.roadmapElements.currentClientSlug}`);
    }
  }

  render() {
    this.checkIfNameIsFilled();
    return (
      <Grid className="defaultGrid">
        <Grid.Column>
          <ClientInput
            currentClient={this.props.roadmapElements.currentClient || ''}
            handleClientInputChange={this.props.roadmapElements.handleClientInputChange}
            createClient={this.handleKeyPress}
            placeholder="enter client's first and last name"
          />
        </Grid.Column>
      </Grid>
    );
  }
}

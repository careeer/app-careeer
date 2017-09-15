/* eslint-disable */
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { mainGridStyle } from '../Constants/CommonElementStyles';
import ClientInput from './ClientInput';

export default class DuplicateClientInput extends Component {
  componentWillMount() {
    this.props.resetClientParams();
    window.addEventListener("popstate", function() {
      this.props.history.push(`/clients`);
       }, false
    );
  }
  componentWillUnmount() {
    window.removeEventListener("popstate", function() {
        this.props.history.push(`/clients`);
      }, false
    );
  }
  
  handleKeyPress = () => {
    this.props.copyClient(this.props.copiedFrom, this.props.currentClient);
  }

  checkIfNameIsFilled = () => {
    if (this.props.hasClientName) {
      this.props.history.push(`/${this.props.currentClientSlug}`);
    }
  }

  render() {
    this.checkIfNameIsFilled();
    return (
      <Grid style={mainGridStyle}>
        <Grid.Column>
          <ClientInput
            currentClient={this.props.currentClient || ''}
            handleClientInputChange={this.props.handleClientInputChange}
            createClient={this.handleKeyPress}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

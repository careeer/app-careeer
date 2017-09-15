/* eslint-disable */
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { mainGridStyle } from '../Constants/CommonElementStyles';
import ClientInput from './ClientInput';

export default class DuplicateClientInput extends Component {
  componentWillMount() {
    this.props.resetClientParams();
    window.addEventListener("popstate", function() {
      location.replace("/clients");
      // // history.replaceState(null, document.title, '/clients');
	    //    setTimeout(function(){
	    //
	    //      },0);
       }, false);
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

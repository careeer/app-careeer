/* eslint-disable */
import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import onClickOutside from 'react-onclickoutside';

class ClientInput extends Component {
  handleKeyPress = (event) => {
    if (event.key === 'Enter' && this.props.currentClient) {
      this.props.createClient();
    }
  }

  handleClickOutside = (event) => {
    event.key = 'Enter';
    this.handleKeyPress(event);
  }

  handleInputChange = (e, data) => {
    this.props.handleClientInputChange(e, data);
  }
  render() {
    return (
        <Input
          transparent
          fluid
          placeholder="enter client's first and last name"
          onKeyPress={this.handleKeyPress}
          name="clientName"
          value={this.props.currentClient}
          onChange={this.handleInputChange}
        />
    );
  }
}

export default onClickOutside(ClientInput);

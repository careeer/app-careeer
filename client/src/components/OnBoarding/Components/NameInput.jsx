/* eslint-disable */
import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import onClickOutside from 'react-onclickoutside';

class NameInput extends Component {
  handleKeyPress = (event) => {
    this.props.createClient(event.key);
  }

  handleClickOutside = (event) => {
    event.key = 'Enter';
    this.handleKeyPress(event);
  }

  render() {
    const errorClass = this.props.nameError ? "nameError" : "userNameInput";

    return (
      <div className={errorClass}>
        Enter first and last name
        <Input
          autoFocus
          transparent
          value={this.props.currentClient}
          onKeyPress={this.handleKeyPress}
          placeholder={this.props.placeholder}
          onChange={this.props.handleClientInputChange}
        />
      </div>
    );
  }
}

export default onClickOutside(NameInput);

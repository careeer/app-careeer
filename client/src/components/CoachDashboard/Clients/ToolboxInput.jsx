/* eslint-disable */
import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import onClickOutside from 'react-onclickoutside';

class ToolboxInput extends Component {
  state = {
    submittedClient: true,
  }

  handleInputChange = () => {
    this.setState({
      submittedClient: false,
    });
  }

  handleClickOutside = (event) => {
    event.key = 'Enter';
    if (this.toolboxUrl.inputRef){
      this.handleKeyPress(event);
    }
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter' && !this.state.submittedClient) {
      this.setState({
        submittedClient: true,
      });
      this.props.updateClientToolbox(this.props.currentClient, this.toolboxUrl.inputRef.value);
    }
  }

  render() {
    return (
        <Input
          type="url"
          autoFocus
          transparent
          name="toolboxUrl"
          onKeyPress={this.handleKeyPress}
          onChange={this.handleInputChange}
          placeholder={this.props.placeholder}
          defaultValue={this.props.inputValue}
          ref={(node) => { this.toolboxUrl = node; }}
        />
    );
  }
}

export default onClickOutside(ToolboxInput);

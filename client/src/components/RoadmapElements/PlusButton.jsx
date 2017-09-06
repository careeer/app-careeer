/* eslint-disable */
import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

export default class PlusButton extends React.Component {
  componentWillMount() {
    window.addEventListener("keydown", this.onKeyPress, false);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKeyPress, false);
  }

  onKeyPress = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.key === 'N') {
      this.props.handleFormOpen();
    }
  }

  render() {
    return (
      <Button
        fluid
        size={this.props.buttonSize}
        onClick={this.props.handleFormOpen}
      >
        <Icon
          inverted
          size={this.props.iconSize}
          name="plus"
        />
      </Button>
    );
  }
}

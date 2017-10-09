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
    if (event.key === 'N' && $crisp.is("chat:opened") !== true) {
      event.preventDefault();
      event.stopPropagation();
      this.props.handleFormOpen();
    }
  }

  render() {
    return (
      <Button
        fluid
        className="addNewButton"
        size={this.props.buttonSize}
        onClick={this.props.handleFormOpen}
      >
        <Icon
          inverted
          name="plus"
          size={this.props.iconSize}
        />
      </Button>
    );
  }
}

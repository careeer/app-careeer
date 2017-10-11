/* eslint-disable */
import React from 'react';
import { Input } from 'semantic-ui-react';
import onClickOutside from 'react-onclickoutside';

class VisionInput extends React.Component {
  handlePress = (event) => {
    this.props.handleKeyPress(event);
  }

  moveCaretAtEnd(e) {
    var temp_value = e.target.value
    e.target.value = ''
    e.target.value = temp_value
  }

  handleClickOutside = (event) => {
    event.key = 'Enter';
    this.props.handleKeyPress(event);
  }

  render() {
    return (
      <Input
        focus
        transparent
        tabIndex={-1}
        className="careerVision"
        onKeyDown={this.handlePress}
        value={this.props.vision || ''}
        onChange={this.props.changeVision}
      >
        <input
          autoFocus
          onFocus={this.moveCaretAtEnd}
          className="careerVision"
        />
      </Input>
    );
  }
}

export default onClickOutside(VisionInput);

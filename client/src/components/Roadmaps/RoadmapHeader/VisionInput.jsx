/* eslint-disable */
import React from 'react';
import { Input } from 'semantic-ui-react';
import onClickOutside from 'react-onclickoutside';

const visionStyle = {
  fontFamily: 'Cabin',
  fontSize: '18px',
  letterSpacing: '2.3px',
  color: '#919191',
  backgroundColor: 'transparent',
  paddingLeft: '0',
  marginBottom: '0',
  paddingTop: '8px',
  width: '100%',
};

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
        style={visionStyle}
        transparent
        tabIndex={-1}
        focus

        onKeyDown={this.handlePress}
        value={this.props.vision || ''}
        onChange={this.props.changeVision}
      >
        <input
          autoFocus
          onFocus={this.moveCaretAtEnd}
          style={visionStyle}
        />
      </Input>
    );
  }
}

export default onClickOutside(VisionInput);

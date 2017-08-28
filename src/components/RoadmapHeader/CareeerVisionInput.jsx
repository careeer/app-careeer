/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from 'semantic-ui-react';

const visionStyle = {
  fontFamily: 'Cabin',
  fontSize: '18px',
  letterSpacing: '2.3px',
  color: '#919191',
  backgroundColor: 'transparent',
  paddingLeft: '0',
  marginBottom: '0',
  paddingTop: '8px',
};

export default class CareeerVisionInput extends React.Component {
  static propTypes = {
    handleKeyPress: PropTypes.func.isRequired,
    changeVision: PropTypes.func.isRequired,
    vision: PropTypes.string,
  }

  handlePress = (event) => {
    this.props.handleKeyPress(event);
  }

  handleClick = (event) => {
    this.props.handleLabelClick(event);
  }
  
  moveCaretAtEnd(e) {
    var temp_value = e.target.value
    e.target.value = ''
    e.target.value = temp_value
  }

  render() {
    if (this.props.openInputForm) {
      return (
        <Input
          style={visionStyle}
          transparent
          tabIndex={-1}
          focus
          fluid
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
    let visionLabelStyle = Object.assign({}, visionStyle);
    if (!this.props.vision) {
      visionLabelStyle.color = '#cecbcb';
      visionLabelStyle.paddingTop = '8px';
      visionLabelStyle.paddingBottom = '5px';
    } else {
      visionLabelStyle.color = '#919191';
      visionLabelStyle.paddingTop = '10px';
      visionLabelStyle.paddingBottom = '5px';
    }
    return (
      <div>
        <Label
          style={visionLabelStyle}
          content={this.props.vision || "what career goal are you focused on achieving? ex: interaction designer at airbnb"}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

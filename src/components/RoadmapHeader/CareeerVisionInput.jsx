/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

const visionStyle = {
  marginTop: '5px',
  height: '30px',
  fontFamily: 'Cabin',
  fontSize: '18px',
  letterSpacing: '2.3px',
  color: '#919191',
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

  render() {
    return (
      <Input
        style={visionStyle}
        maxLength="160"
        transparent
        fluid
        onKeyDown={this.handlePress}
        placeholder="what career goal are you focused on achieving? ex: interaction designer at airbnb"
        value={this.props.vision || ''}
        onChange={this.props.changeVision}
      >
        <input
          style={visionStyle}
        />
      </Input>
    );
  }
}

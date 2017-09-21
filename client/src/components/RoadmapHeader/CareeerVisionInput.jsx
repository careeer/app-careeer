/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';
import VisionInput from './VisionInput';

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

  handleClick = (event) => {
    this.props.handleLabelClick(event);
  }

  render() {
    if (this.props.openInputForm) {
      return (
        <div>
        <VisionInput
          vision={this.props.vision || ''}
          changeVision={this.props.changeVision}
          handleKeyPress={this.props.handleKeyPress}
        />
        </div>
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

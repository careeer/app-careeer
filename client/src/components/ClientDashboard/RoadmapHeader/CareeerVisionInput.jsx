/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';
import VisionInput from './VisionInput';

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
    let visionLabelStyle = {};
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
          className="careerVision"
          style={visionLabelStyle}
          content={this.props.vision || "what career goal are you focused on achieving? ex: interaction designer at airbnb"}
          onClick={this.handleClick}
        />
        <Label
          className="careerVisionMobile"
          style={visionLabelStyle}
          content={this.props.vision || "career goal"}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

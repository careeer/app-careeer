import React from 'react';
import { inject, observer } from 'mobx-react';
import { Input } from 'semantic-ui-react';

const visionStyle = {
  height: '22px',
  fontFamily: 'Cabin',
  fontSize: '18px',
  letterSpacing: '2.3px',
  color: '#919191',
};

@inject('roadmapElements')@observer
export default class NewClient extends React.Component {
  handleKeyPress = (event) => {
    if (event.key === 'Enter' && this.props.roadmapElements.currentClientVision) {
      this.props.roadmapElements.updateClientVision();
    }
  }

  render() {
    return (
      <Input
        style={visionStyle}
        maxLength="160"
        transparent
        fluid
        placeholder="what career goal are you focused on achieving? ex: interaction designer at airbnb"
        onKeyPress={this.handleKeyPress}
        value={this.props.roadmapElements.currentClientVision || ''}
        onChange={this.props.roadmapElements.handleClientVisionChange}
      >
        <input style={visionStyle} />
      </Input>
    );
  }
}

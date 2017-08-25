import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Grid } from 'semantic-ui-react';
import ImageAvatar from './ImageAvatar';
import ClientName from './ClientName';
import ImageUpload from './ImageUpload';
import CareeerVisionInput from './CareeerVisionInput';

const overlayStyle = {
  position: 'absolute',
};

@inject('roadmapElements', 'headerStore')@observer
class ClientHeader extends Component {
  handleAvatarSave = (avatarUrl) => {
    this.saveAvatar(avatarUrl);
  };

  saveAvatar = (avatarUrl) => {
    this.props.roadmapElements.updateClientAvatar(avatarUrl);
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter' && this.props.roadmapElements.currentClientVision) {
      this.props.roadmapElements.updateClientVision();
    }
  }

  render() {
    return (
      <Grid.Row>
        <div>
          <div style={overlayStyle}>
            <ImageAvatar
              avatar={this.props.roadmapElements.currentClientAvatar}
            />
            <ClientName
              name={this.props.value}
            />
          </div>
          <ImageUpload saveAvatarUrl={this.handleAvatarSave} />
        </div>
        <CareeerVisionInput
          vision={this.props.roadmapElements.currentClientVision}
          changeVision={this.props.roadmapElements.handleClientVisionChange}
          handleKeyPress={this.handleKeyPress}
        />
      </Grid.Row>
    );
  }
}

export default ClientHeader;

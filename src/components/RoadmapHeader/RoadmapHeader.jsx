/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Grid } from 'semantic-ui-react';
import ImageAvatar from './ImageAvatar';
import ClientName from './ClientName';
import ImageUpload from './ImageUpload';
import './RoadmapHeader.css';

const overlayStyle = {
  position: 'absolute',
  marginRight: '15px',
  width: '60px',
  height: '60px',
};

@inject('roadmapElements', 'headerStore')@observer
class RoadmapHeader extends Component {
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
      <Grid doubling columns={2}>
        <Grid.Column width={1}>
          <div style={overlayStyle}>
            <ImageAvatar
              avatar={this.props.roadmapElements.currentClientAvatar}
            />
          </div>
          <ImageUpload saveAvatarUrl={this.handleAvatarSave} />
        </Grid.Column>
        <Grid.Column
          width={15}
          verticalAlign="middle"
          style={{ paddingTop: '8px', paddingLeft: '0' }}
        >
          <ClientName
            vision={this.props.roadmapElements.currentClientVision}
            changeVision={this.props.roadmapElements.handleClientVisionChange}
            handleKeyPress={this.handleKeyPress}
            name={this.props.value}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

export default RoadmapHeader;

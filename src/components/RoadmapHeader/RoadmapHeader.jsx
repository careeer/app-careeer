/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Grid } from 'semantic-ui-react';
import ImageAvatar from './ImageAvatar';
import ClientName from './ClientName';
import ImageUpload from './ImageUpload';

const overlayStyle = {
  position: 'absolute',
  marginRight: '15px',
  width: '60px',
  height: '60px',
};

const columnStyle = {
  width: '70px',
  paddingLeft: '2px',
};

const nameVisionColumnStyle = {
  paddingTop: '14px',
  paddingLeft: '0',
  width: '90%',
}
@inject('roadmapElements', 'headerStore')@observer
class RoadmapHeader extends Component {
  state = {
    openInputForm: false,
  }

  handleAvatarSave = (avatarUrl) => {
    this.saveAvatar(avatarUrl);
  };

  saveAvatar = (avatarUrl) => {
    this.props.roadmapElements.updateClientAvatar(avatarUrl);
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.roadmapElements.updateClientVision();
      this.setState({
        openInputForm: false,
      });
    }
  }

  handleLabelClick = (event) => {
    this.setState({
      openInputForm: true,
    });
  }

  render() {
    return (
      <Grid doubling columns={2}>
        <Grid.Column style={columnStyle}>
          <div style={overlayStyle}>
            <ImageAvatar
              avatar={this.props.roadmapElements.currentClientAvatar}
            />
          </div>
          <ImageUpload saveAvatarUrl={this.handleAvatarSave} />
        </Grid.Column>
        <Grid.Column
          verticalAlign="middle"
          style={nameVisionColumnStyle}
        >
          <ClientName
            vision={this.props.roadmapElements.currentClientVision}
            changeVision={this.props.roadmapElements.handleClientVisionChange}
            handleKeyPress={this.handleKeyPress}
            name={this.props.value}
            handleLabelClick={this.handleLabelClick}
            openInputForm={this.state.openInputForm}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

export default RoadmapHeader;

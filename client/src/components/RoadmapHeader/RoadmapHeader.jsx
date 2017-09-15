/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Grid, Statistic } from 'semantic-ui-react';
import ImageAvatar from './ImageAvatar';
import ClientName from './ClientName';
import ImageUpload from './ImageUpload';
import { overlayStyle, columnStyle, nameVisionColumnStyle, statisticColumnStyle, statisticFirstStyle, statisticStyle, statisticValueStyle, statisticLabelStyle } from '../Constants/RoadmapHeaderStyles';

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
      this.toggleVisionInput();
    }
  }

  handleLabelClick = (event) => {
    this.toggleVisionInput();
  }

  toggleVisionInput = () => {
    this.setState({
      openInputForm: !this.state.openInputForm,
    });
    this.props.roadmapElements.toggleCreateForm();
    this.props.roadmapElements.togglePlusButton();
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
        { (this.props.roadmapElements.completedElements.length > 0) &&
        <Grid.Column style={statisticColumnStyle}>
          <Statistic.Group>
            <Statistic style={statisticFirstStyle} >
              <Statistic.Value style={statisticValueStyle}>
                {this.props.roadmapElements.completedElements.length}
              </Statistic.Value>
              <Statistic.Label style={statisticLabelStyle}>
                completed actions
              </Statistic.Label>
            </Statistic>
            <Statistic style={statisticStyle}>
              <Statistic.Value style={statisticValueStyle}>
                {this.props.roadmapElements.completedPerDaySimpleStat}
              </Statistic.Value>
              <Statistic.Label style={statisticLabelStyle}>
                completed actions / day
              </Statistic.Label>
          </Statistic>
          </Statistic.Group>
        </Grid.Column>
      }
      </Grid>
    );
  }
}

export default RoadmapHeader;

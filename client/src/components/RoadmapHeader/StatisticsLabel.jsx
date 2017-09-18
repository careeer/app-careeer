/* eslint-disable */
import React, { Component } from 'react';
import { Transition, Statistic } from 'semantic-ui-react';
import { statisticColumnStyle, statisticFirstStyle, statisticStyle, statisticValueStyle, statisticLabelStyle, statisticMainValueStyle, statisticMainLabelStyle } from '../Constants/RoadmapHeaderStyles';

class RoadmapHeader extends Component {
  changeColor = () => {
    statisticMainValueStyle.color = '#03ac13';
    statisticMainLabelStyle.color = '#03ac13';
    statisticMainValueStyle.opacity = '1';
    statisticMainLabelStyle.opacity = '1';
  }

  resetColor = () => {
    statisticMainValueStyle.color = '#949494';
    statisticMainLabelStyle.color = '#949494';
    if (this.props.numberOfNonEmpty > 0) {
      statisticMainValueStyle.opacity = '1';
      statisticMainLabelStyle.opacity = '1';
    }

  }

  render () {
    let updatedStatisticsMainValueStyle;
    let updatedStatisticsMainLabelStyle;
    if (this.props.bannerVisible){
      updatedStatisticsMainValueStyle= Object.assign({}, statisticMainValueStyle, {
        opacity: 1,
        color: '#03ac13',
      });
      updatedStatisticsMainLabelStyle= Object.assign({}, statisticMainLabelStyle, {
        opacity: 1,
        color: '#03ac13',
      });
    } else {
      updatedStatisticsMainValueStyle= Object.assign({}, statisticMainValueStyle, {
        color: '#949494',
      });
      updatedStatisticsMainLabelStyle= Object.assign({}, statisticMainLabelStyle, {
        color: '#949494',
      });

      if (this.props.numberOfNonEmpty > 0) {
        updatedStatisticsMainValueStyle= Object.assign({}, statisticMainValueStyle, {
          opacity: 1,
          color: '#949494',
        });
        updatedStatisticsMainLabelStyle= Object.assign({}, statisticMainLabelStyle, {
          opacity: 1,
          color: '#949494',
        });

      }
    }
    return (
      <Statistic.Group>
      <Statistic style={statisticFirstStyle}>
        <Statistic.Value style={updatedStatisticsMainValueStyle}>
          {this.props.numberCompleted}
        </Statistic.Value>
        <Statistic.Label style={updatedStatisticsMainLabelStyle}>
          completed actions
        </Statistic.Label>
      </Statistic>
        <Statistic style={statisticStyle} >
          <Statistic.Value style={statisticValueStyle}>
            {this.props.currentActions}
          </Statistic.Value>
          <Statistic.Label style={statisticLabelStyle}>
            current actions
          </Statistic.Label>
        </Statistic>
      </Statistic.Group>
    );
  }
}

export default RoadmapHeader;

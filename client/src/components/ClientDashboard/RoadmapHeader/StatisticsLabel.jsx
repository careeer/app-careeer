/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Statistic } from 'semantic-ui-react';

@inject('roadmapElements')@observer
class RoadmapHeader extends Component {

  render() {
    const { isBannerVisible, completedElements, incompleteElements } = this.props.roadmapElements;

    let updatedStatisticsMainValueStyle;
    let updatedStatisticsMainLabelStyle;

    if (isBannerVisible) {
      updatedStatisticsMainValueStyle = {
        color: '#03ac13',
      };
      updatedStatisticsMainLabelStyle = {
        color: '#03ac13',
      };
    } else {
      updatedStatisticsMainValueStyle = {
        color: '#949494',
      };
      updatedStatisticsMainLabelStyle = {
        color: '#949494',
      };
    }

    return (
      <Statistic.Group>
        <Statistic className="statisticFirstComponent">
          <Statistic.Value className="statisticValue" style={updatedStatisticsMainValueStyle}>
            {this.props.completedStats ? this.props.completedStats : completedElements.length}
          </Statistic.Value>
          <Statistic.Label className="statisticLabel" style={updatedStatisticsMainLabelStyle}>
            completed
          </Statistic.Label>
        </Statistic>

        <Statistic className="statisticSecondComponent">
          <Statistic.Value className="statisticValue">
            {this.props.incompleteStats ? this.props.incompleteStats : incompleteElements.length}
          </Statistic.Value>
          <Statistic.Label className="statisticLabel">
            current
          </Statistic.Label>
        </Statistic>
      </Statistic.Group>
    );
  }
}

export default RoadmapHeader;

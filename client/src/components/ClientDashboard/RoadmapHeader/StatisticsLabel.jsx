/* eslint-disable */
import React, { Component } from 'react';
import { Transition, Statistic } from 'semantic-ui-react';

class RoadmapHeader extends Component {

  render () {
    let updatedStatisticsMainValueStyle;
    let updatedStatisticsMainLabelStyle;

    if (this.props.bannerVisible){
      updatedStatisticsMainValueStyle= {
        color: '#03ac13',
      };
      updatedStatisticsMainLabelStyle= {
        color: '#03ac13',
      };
    } else {
      updatedStatisticsMainValueStyle= {
        color: '#949494',
      };
      updatedStatisticsMainLabelStyle= {
        color: '#949494',
      };
    }

    return (
      <Statistic.Group>
        <Statistic className="statisticFirstComponent">
          <Statistic.Value className="statisticValue" style={updatedStatisticsMainValueStyle}>
            {this.props.numberCompleted}
          </Statistic.Value>
          <Statistic.Label className="statisticLabel" style={updatedStatisticsMainLabelStyle}>
            completed actions
          </Statistic.Label>
        </Statistic>
          <Statistic className="statisticSecondComponent">
            <Statistic.Value className="statisticValue">
              {this.props.currentActions}
            </Statistic.Value>
            <Statistic.Label className="statisticLabel">
              current actions
            </Statistic.Label>
          </Statistic>
      </Statistic.Group>
    );
  }
}

export default RoadmapHeader;

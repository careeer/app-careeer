import React from 'react';
import PropTypes from 'prop-types';
import { Statistic } from 'semantic-ui-react';

const RoadmapHeader = function RoadmapHeader(props) {
  const { isBannerVisible, completedStats, incompleteStats } = props;

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
          {completedStats}
        </Statistic.Value>
        <Statistic.Label className="statisticLabel" style={updatedStatisticsMainLabelStyle}>
          completed
        </Statistic.Label>
      </Statistic>

      <Statistic className="statisticSecondComponent">
        <Statistic.Value className="statisticValue">
          {incompleteStats}
        </Statistic.Value>
        <Statistic.Label className="statisticLabel">
          current
        </Statistic.Label>
      </Statistic>
    </Statistic.Group>
  );
};

RoadmapHeader.propTypes = {
  isBannerVisible: PropTypes.bool.isRequired,
  completedStats: PropTypes.string.isRequired,
  incompleteStats: PropTypes.string.isRequired,
};

export default RoadmapHeader;

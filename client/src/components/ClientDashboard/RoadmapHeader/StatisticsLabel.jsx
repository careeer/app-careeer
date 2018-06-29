import React from 'react';
import PropTypes from 'prop-types';
import { Statistic } from 'semantic-ui-react';

const RoadmapHeader = function RoadmapHeader(props) {
  const { isBannerVisible, completedStats, incompleteStats } = props;

  let updatedStatisticsMainValueStyle;
  let updatedStatisticsMainLabelStyle;

  if (isBannerVisible) {
    updatedStatisticsMainValueStyle = {
      color: '#55dae0',
    };
    updatedStatisticsMainLabelStyle = {
      color: '#55dae0',
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
  completedStats: PropTypes.number.isRequired,
  incompleteStats: PropTypes.number.isRequired,
};

export default RoadmapHeader;

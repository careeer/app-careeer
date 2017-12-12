import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

const Plans = props => (
  <div className="plans">
    <Segment
      padded
      color="violet"
      className={(props.selectedAccount === 'Fast' ? 'fast' : 'selected')}
      onClick={() => props.handleSegmentClick('Fast')}
    >
      <header>
        Fast Track
      </header>
      <p>
        $350/<span>month</span>
      </p>
      <div className="planDescription">
        +2 hours of voice and video with your coach
      </div>
    </Segment>
    <Segment
      padded
      color="green"
      className={(props.selectedAccount === 'Standard' ? 'standard' : 'selected')}
      onClick={() => props.handleSegmentClick('Standard')}
    >
      <header>
        Standard track
      </header>
      <p>
        $150/<span>month</span>
      </p>
      <div className="planDescription">
        +1 hour of voice and video with your coach
      </div>
    </Segment>
    <Segment
      padded
      color="yellow"
      className={(props.selectedAccount === 'Self' ? 'self' : 'selected')}
      onClick={() => props.handleSegmentClick('Self')}
    >
      <header>
        Self starter
      </header>
      <p>
        $50/<span>month</span>
      </p>
      <div className="planDescription">
        Dedicated coach, personalized roadmap, and unlimited messaging
      </div>
    </Segment>
  </div>
);

Plans.propTypes = {
  selectedAccount: PropTypes.string.isRequired,
  handleSegmentClick: PropTypes.func.isRequired,
};

export default Plans;

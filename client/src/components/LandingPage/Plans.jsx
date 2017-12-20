import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Label } from 'semantic-ui-react';

const Plans = props => (
  <div className="plans">
    <Segment
      padded
      color="violet"
      className={(props.selectedAccount === 'Fast' ? 'selected' : 'fast')}
      onClick={() => props.handleSegmentClick('Fast', 'Fast track')}
    >
      <header>
        Fast track
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
      className={(props.selectedAccount === 'Standard' ? 'selected' : 'standard')}
      onClick={() => props.handleSegmentClick('Standard', 'Standard track')}
    >
      <Label floating color="green" ribbon="right">most popular</Label>
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
      className={(props.selectedAccount === 'Starter' ? 'selected' : 'starter')}
      onClick={() => props.handleSegmentClick('Starter', 'Self starter')}
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

import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Label } from 'semantic-ui-react';

export const PLAN = {
  Fast: {
    cost: '500',
    id: 'Fast',
    name: 'Fast track',
  },
  Standard: {
    cost: '300',
    id: 'Standard',
    name: 'Standard track',
  },
  Starter: {
    cost: '150',
    id: 'Starter',
    name: 'Self starter',
  },
  Fast_Legacy: {
    cost: '350',
    id: 'Fast',
    name: 'Fast track',
  },
  Standard_Legacy: {
    cost: '150',
    id: 'Standard',
    name: 'Standard track',
  },
  Starter_Legacy: {
    cost: '50',
    id: 'Starter',
    name: 'Self starter',
  },
};

const Plans = props => (
  <div className="plans">
    <Segment
      padded
      color="violet"
      className={(PLAN[props.selectedAccount].id === PLAN.Fast.id ? 'selected' : 'fast')}
      onClick={() => props.handleSegmentClick(
        PLAN.Fast.id,
        PLAN.Fast.name,
        PLAN.Fast.cost,
      )}
    >
      <header>
        {PLAN.Fast.name}
      </header>
      <p>
        ${PLAN.Fast.cost}/<span>month</span>
      </p>
      <div className="planDescription">
        +Three 30 minutes calls, weekly unlimited messaging, dedicated coach
      </div>
    </Segment>
    <Segment
      padded
      color="green"
      className={(PLAN[props.selectedAccount].id === PLAN.Standard.id ? 'selected' : 'standard')}
      onClick={() => props.handleSegmentClick(
        PLAN.Standard.id,
        PLAN.Standard.name,
        PLAN.Standard.cost,
      )}
    >
      <Label floating color="green" ribbon="right">most popular</Label>
      <header>
        {PLAN.Standard.name}
      </header>
      <p>
        ${PLAN.Standard.cost}/<span>month</span>
      </p>
      <div className="planDescription">
        +Two 30 minutes calls, weekly unlimited messaging, dedicated coach
      </div>
    </Segment>
    <Segment
      padded
      color="yellow"
      className={(PLAN[props.selectedAccount].id === PLAN.Starter.id ? 'selected' : 'starter')}
      onClick={() => props.handleSegmentClick(
        PLAN.Starter.id,
        PLAN.Starter.name,
        PLAN.Starter.cost,
      )}
    >
      <header>
        {PLAN.Starter.name}
      </header>
      <p>
        ${PLAN.Starter.cost}/<span>month</span>
      </p>
      <div className="planDescription">
        Dedicated coach, personalized roadmap, and limited messaging
      </div>
    </Segment>
  </div>
);

Plans.propTypes = {
  selectedAccount: PropTypes.string.isRequired,
  handleSegmentClick: PropTypes.func.isRequired,
};

export default Plans;

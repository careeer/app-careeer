import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Label } from 'semantic-ui-react';

import { PLAN } from '../../LandingPage/Components/Plans';

function PlanSelected(props) {
  const account = PLAN[props.selectedPlan].id;

  let color;
  let header;
  let price;
  let description;

  switch (account) {
    case PLAN.Fast.id:
      color = 'violet';
      header = PLAN.Fast.name;
      price = `$${PLAN.Fast.cost}`;
      description = '+2 hours of voice and video with your coach';
      break;
    case PLAN.Standard.id:
      color = 'green';
      header = PLAN.Standard.name;
      price = `$${PLAN.Standard.cost}`;
      description = '+1 hour of voice and video with your coach';
      break;
    case PLAN.Starter.id:
      color = 'yellow';
      header = PLAN.Starter.name;
      price = `$${PLAN.Starter.cost}`;
      description = 'Dedicated coach, personalized roadmap, and unlimited messaging';
      break;
    default:
      break;
  }

  return (
    <div className="plans">
      <Segment
        padded
        color={color}
        className="selected"
      >
        { color === 'green' &&
          <Label floating color="green" ribbon="right">most popular</Label>
        }
        <header>
          {header}
        </header>
        <p>
          {price}/<span>month</span>
        </p>
        <div className="planDescription">
          {description}
        </div>
      </Segment>
    </div>
  );
}

PlanSelected.propTypes = {
  selectedPlan: PropTypes.string.isRequired,
};

export default PlanSelected;

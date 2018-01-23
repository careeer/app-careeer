import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Label } from 'semantic-ui-react';

function PlanSelected(props) {
  const account = props.selectedPlan;

  let color;
  let header;
  let price;
  let description;

  switch (account) {
    case 'Fast':
      color = 'violet';
      header = 'Fast Track';
      price = '$350';
      description = '+2 hours of voice and video with your coach';
      break;
    case 'Standard':
      color = 'green';
      header = 'Standard track';
      price = '$150';
      description = '+1 hour of voice and video with your coach';
      break;
    case 'Starter':
      color = 'yellow';
      header = 'Self starter';
      price = '$50';
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

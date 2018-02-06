import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import PlanSelected from './PlanSelected';

const SelectPlanMessage = props => (
  <div className="messageBody">
    <h1 className="introHeader">
      {props.planName}
    </h1>
    <Image
      avatar
      alt="avatar"
      className="avatar"
      src={props.avatarUrl || 'https://res.cloudinary.com/careeer/image/upload/v1504959238/Careeer_logo_a3gu5x.png'}
    />
    <h2 className="introMessage">
      Here’s the plan you selected:
    </h2>
    <PlanSelected selectedPlan={props.selectedPlan} />
  </div>
);

SelectPlanMessage.propTypes = {
  planName: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  selectedPlan: PropTypes.string.isRequired,
};

export default SelectPlanMessage;

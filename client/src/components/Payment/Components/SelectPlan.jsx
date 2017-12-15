import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from './PageHeader';
import SelectPlanMessage from './SelectPlanMessage';
import SelectPlanActions from './SelectPlanActions';
import SelectPlanOptions from './SelectPlanOptions';

const SelectPlan = props => (
  <div>
    <PageHeader
      freeTrial
      continueSubscription
    />
    { props.showSelected ? (
      <div>
        <SelectPlanMessage
          planName={props.planName}
          selectedPlan={props.selectedPlan}
          avatarUrl={props.currentClientAvatar}
        />
        <SelectPlanActions
          handleContinueClick={props.handleContinueClick}
          handleToggleShowSelected={props.handleToggleShowSelected}
        />
      </div>
    ) : (
      <div>
        <SelectPlanOptions
          selectedPlan={props.selectedPlan}
          handleSegmentClick={props.handleSegmentClick}
          handleContinueClick={props.handleToggleShowSelected}
        />
      </div>
    )}
  </div>
);

SelectPlan.propTypes = {
  planName: PropTypes.string.isRequired,
  showSelected: PropTypes.bool.isRequired,
  selectedPlan: PropTypes.string.isRequired,
  handleSegmentClick: PropTypes.func.isRequired,
  handleContinueClick: PropTypes.func.isRequired,
  currentClientAvatar: PropTypes.string.isRequired,
  handleToggleShowSelected: PropTypes.func.isRequired,
};

export default SelectPlan;

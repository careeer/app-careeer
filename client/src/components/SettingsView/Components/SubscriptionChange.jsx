import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

import Plans from '../../LandingPage/Components/Plans';
import SubscriptionChangeMessage from './SubscriptionChangeMessage';

const SubscriptionChange = props => (
  <div className="messageBody settings">
    <SubscriptionChangeMessage
      newPlan={props.newPlan}
      isLoading={props.isLoading}
      previewCost={props.previewCost}
      transactionDate={props.transactionDate}
      subscriptionAction={props.subscriptionAction}
      currentSubscriptionName={props.currentSubscriptionName}
    />
    <Plans
      selectedAccount={props.selectedPlan}
      handleSegmentClick={props.handleSegmentClick}
    />
    <Button
      content="Save changes"
      loading={props.isLoading}
      onClick={props.onSaveChanges}
      className="changeSubscriptionButton"
      disabled={props.subscriptionAction === 'none' || props.isLoading}
    />
    <Button
      basic
      content="Go back"
      disabled={props.isLoading}
      onClick={props.onGoBackClick}
      className="changePaymentButton"
    />
    <div className="cancelLinkContainer">
      <a
        role="link"
        tabIndex={0}
        className="cancelLink"
        onClick={props.onCancelAccountClick}
      >
        Cancel subscription and delete account
      </a>
    </div>
  </div>
);

SubscriptionChange.propTypes = {
  newPlan: PropTypes.shape(
    {
      cost: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  onGoBackClick: PropTypes.func.isRequired,
  onSaveChanges: PropTypes.func.isRequired,
  selectedPlan: PropTypes.string.isRequired,
  handleSegmentClick: PropTypes.func.isRequired,
  subscriptionAction: PropTypes.string.isRequired,
  onCancelAccountClick: PropTypes.func.isRequired,

  previewCost: PropTypes.number.isRequired,
  transactionDate: PropTypes.string.isRequired,
  currentSubscriptionName: PropTypes.string.isRequired,
};

export default SubscriptionChange;

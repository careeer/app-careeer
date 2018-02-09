import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = props => (
  <div className="header">
    <div className={props.freeTrial ? 'selected' : ''}>
      <a
        role="link"
        tabIndex={0}
        onClick={props.handleTrialClick}
      >
        {props.subscriptionStatus === 'trial' ?
          'Free trial completed' : 'Congratulations'}
      </a>
    </div>

    <div className={props.continueSubscription ? 'selected' : ''}>
      <a
        role="link"
        tabIndex={0}
        onClick={props.handleSubscriptionClick}
      >
        Continue subscription
      </a>
    </div>
    <div className={props.checkout ? 'selected' : ''}>
      <a
        role="link"
        tabIndex={0}
        onClick={props.handleSelectPaymentClick}
      >
        Enter payment info
      </a>
    </div>
  </div>
);

PageHeader.propTypes = {
  checkout: PropTypes.bool,
  freeTrial: PropTypes.bool,
  continueSubscription: PropTypes.bool,
  handleTrialClick: PropTypes.func.isRequired,
  subscriptionStatus: PropTypes.string.isRequired,
  handleSubscriptionClick: PropTypes.func.isRequired,
  handleSelectPaymentClick: PropTypes.func.isRequired,
};

PageHeader.defaultProps = {
  checkout: false,
  freeTrial: false,
  continueSubscription: false,
};

export default PageHeader;

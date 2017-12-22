import React from 'react';
import PropTypes from 'prop-types';
import { Elements } from 'react-stripe-elements';

import PageHeader from './PageHeader';
import CheckoutMessage from './CheckoutMessage';
import CheckoutCardForm from './CheckoutCardForm';

const Checkout = props => (
  <div className="checkout">
    <PageHeader
      freeTrial
      continueSubscription
      checkout
    />
    <CheckoutMessage
      planName={props.planName}
      avatarUrl={props.currentClientAvatar}
    />
    <Elements>
      <CheckoutCardForm
        selectedPlan={props.selectedPlan}
        cardErrors={props.cardErrors}
        handleCardErrors={props.handleCardErrors}
      />
    </Elements>
  </div>
);

Checkout.propTypes = {
  planName: PropTypes.string.isRequired,
  cardErrors: PropTypes.string.isRequired,
  selectedPlan: PropTypes.string.isRequired,
  handleCardErrors: PropTypes.func.isRequired,
  currentClientAvatar: PropTypes.string.isRequired,
};

export default Checkout;

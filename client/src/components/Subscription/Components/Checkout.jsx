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
      planCost={props.planCost}
      avatarUrl={props.currentClientAvatar}
    />
    <Elements>
      <CheckoutCardForm
        cardErrors={props.cardErrors}
        selectedPlan={props.selectedPlan}
        handleCardToken={props.handleCardToken}
        handleCardErrors={props.handleCardErrors}
      />
    </Elements>
  </div>
);

Checkout.propTypes = {
  planName: PropTypes.string.isRequired,
  planCost: PropTypes.string.isRequired,
  cardErrors: PropTypes.string.isRequired,
  selectedPlan: PropTypes.string.isRequired,
  handleCardToken: PropTypes.func.isRequired,
  handleCardErrors: PropTypes.func.isRequired,
  currentClientAvatar: PropTypes.string.isRequired,
};

export default Checkout;

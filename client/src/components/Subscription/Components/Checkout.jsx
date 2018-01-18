import React from 'react';
import PropTypes from 'prop-types';
import { Elements } from 'react-stripe-elements';

import CheckoutMessage from './CheckoutMessage';
import CheckoutCardForm from './CheckoutCardForm';

const Checkout = props => (
  <div className="checkout">
    <CheckoutMessage
      planName={props.planName}
      planCost={props.planCost}
      avatarUrl={props.currentClientAvatar}
    />
    <Elements>
      <CheckoutCardForm
        isLoading={props.isLoading}
        cardErrors={props.cardErrors}
        cardSuccess={props.cardSuccess}
        selectedPlan={props.selectedPlan}
        disableSubmit={props.disableSubmit}
        handleCardToken={props.handleCardToken}
        handleCardErrors={props.handleCardErrors}
      />
    </Elements>
  </div>
);

Checkout.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  planName: PropTypes.string.isRequired,
  planCost: PropTypes.string.isRequired,
  cardErrors: PropTypes.string.isRequired,
  cardSuccess: PropTypes.string.isRequired,
  disableSubmit: PropTypes.bool.isRequired,
  selectedPlan: PropTypes.string.isRequired,
  handleCardToken: PropTypes.func.isRequired,
  handleCardErrors: PropTypes.func.isRequired,
  currentClientAvatar: PropTypes.string.isRequired,
};

export default Checkout;

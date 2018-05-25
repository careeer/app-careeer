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
      pendingPayment={props.pendingPayment}
    />
    <Elements>
      <CheckoutCardForm
        isLoading={props.isLoading}
        cardErrors={props.cardErrors}
        checkoutButtonLabel="Checkout"
        cardSuccess={props.cardSuccess}
        disableSubmit={props.disableSubmit}
        handleCardToken={props.handleCardToken}
        handleCardErrors={props.handleCardErrors}
      />
    </Elements>
  </div>
);

Checkout.propTypes = {
  pendingPayment: PropTypes.bool,
  isLoading: PropTypes.bool.isRequired,
  planName: PropTypes.string.isRequired,
  planCost: PropTypes.string.isRequired,
  cardErrors: PropTypes.string.isRequired,
  cardSuccess: PropTypes.string.isRequired,
  disableSubmit: PropTypes.bool.isRequired,
  handleCardToken: PropTypes.func.isRequired,
  handleCardErrors: PropTypes.func.isRequired,
  currentClientAvatar: PropTypes.string.isRequired,
};

Checkout.defaultProps = {
  pendingPayment: false,
};

export default Checkout;

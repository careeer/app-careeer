import React from 'react';
import PropTypes from 'prop-types';
import { Button, Divider } from 'semantic-ui-react';
import { Elements } from 'react-stripe-elements';
import CheckoutCardForm from '../../Subscription/Components/CheckoutCardForm';

const CreditCardChange = props => (
  <div className="messageBody settings">
    <div className="checkout">
      <h3>Current card</h3>
      <p className="cardInfo">
        {props.cardInfo.card_brand} &nbsp; &nbsp;
        ****{props.cardInfo.card_last4} &nbsp; &nbsp;
        &nbsp;{props.cardInfo.card_exp_month}/{props.cardInfo.card_exp_year}
      </p>
      <Divider />
      <Elements>
        <CheckoutCardForm
          isLoading={props.isLoading}
          cardErrors={props.cardErrors}
          cardSuccess=""
          checkoutButtonLabel="Save changes"
          disableSubmit={props.disableSubmit}
          handleCardToken={props.handleCardToken}
          handleCardErrors={props.handleCardErrors}
        />
      </Elements>
    </div>
    <Button
      basic
      content="Go back"
      className="changePaymentButton"
      onClick={props.onGoBackClick}
    />
  </div>
);

CreditCardChange.propTypes = {
  cardInfo: PropTypes.shape(
    {
      card_brand: PropTypes.string,
      card_last4: PropTypes.string,
      card_exp_year: PropTypes.string,
      card_exp_month: PropTypes.string,
    }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  cardErrors: PropTypes.string.isRequired,
  disableSubmit: PropTypes.bool.isRequired,
  onGoBackClick: PropTypes.func.isRequired,
  handleCardToken: PropTypes.func.isRequired,
  handleCardErrors: PropTypes.func.isRequired,
};

export default CreditCardChange;

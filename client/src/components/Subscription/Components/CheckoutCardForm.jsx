/* eslint-disable */
import React from 'react';
import { Button } from 'semantic-ui-react';
import { CardElement, injectStripe } from 'react-stripe-elements';

class CheckoutCardForm extends React.Component {
  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.stripe.createToken().then(payload => console.log(payload));
  };

  handleChange = (change) => {
    this.props.handleCardErrors(change);
    console.log('[change]', change);
  };

  render() {
    return (
      <form className="checkoutForm" onSubmit={this.handleSubmit}>
        <CardElement
          onChange={this.handleChange}
        />
        <div className="cardErrors">
          {this.props.cardErrors}
        </div>
        <div className="callToAction" >
          <Button
            content="Checkout"
            className="defaultButton"
          />
        </div>
      </form>
    );
  }
}

export default injectStripe(CheckoutCardForm);

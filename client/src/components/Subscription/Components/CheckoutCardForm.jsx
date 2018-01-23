/* eslint-disable */
import React from 'react';
import { Button } from 'semantic-ui-react';
import { CardElement, injectStripe } from 'react-stripe-elements';

class CheckoutCardForm extends React.Component {
  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.stripe.createToken().then(payload => this.props.handleCardToken(payload));
  };

  handleChange = (change) => {
    this.props.handleCardErrors(change);
  };

  render() {
    return (
      <form
        className="checkoutForm"
        onSubmit={this.handleSubmit}
      >
        <CardElement
          onChange={this.handleChange}
        />
        <div className="cardErrors">
          {this.props.cardErrors}
        </div>
        <div className="cardSuccess">
          {this.props.cardSuccess}
        </div>
        <div className="callToAction" >
          <Button
            content={this.props.checkoutButtonLabel}
            className="defaultButton"
            loading={this.props.isLoading}
            disabled={this.props.disableSubmit || this.props.isLoading}
          />
        </div>
      </form>
    );
  }
}

export default injectStripe(CheckoutCardForm);

/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import PaymentLayout from './Components/PaymentLayout';
import CurtainsDown from './Components/CurtainsDown';
import Checkout from './Components/Checkout';

@inject('subscription') @observer
export default class Subscription extends Component {
  componentWillMount() {
    $crisp.push(['do', 'chat:hide']);
    this.props.subscription.getPlan();
  }

  componentWillUnmount() {
    $crisp.push(['do', 'chat:show']);
  }

  handleCardErrors = (event) => {
    this.props.subscription.handleCardErrors(event);
  }

  handleCardToken = (payload) => {
    this.props.subscription.handleCardToken(payload);
  }

  handleAnimationComplete = () => {
    this.props.handleContinueClick(this.props.subscription.planName);
  }


  render() {
    const { currentClientAvatar } = this.props;

    const { planName,
            planCost,
            isLoading,
            cardErrors,
            cardSuccess,
            selectedPlan,
            disableSubmit,
            animationVisible } = this.props.subscription;

    return (
      <PaymentLayout>
        <div>
          <CurtainsDown
            visible={animationVisible}
            handleAnimationComplete={this.handleAnimationComplete}
          />
          <Checkout
            planName={planName}
            planCost={planCost}
            isLoading={isLoading}
            cardErrors={cardErrors}
            cardSuccess={cardSuccess}
            selectedPlan={selectedPlan}
            disableSubmit={disableSubmit}
            handleCardToken={this.handleCardToken}
            handleCardErrors={this.handleCardErrors}
            currentClientAvatar={currentClientAvatar}
          />
        </div>
      </PaymentLayout>
    );
  }
}

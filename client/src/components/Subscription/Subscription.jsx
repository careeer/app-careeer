/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import SubscriptionComplete from './SubscriptionComplete';
import PaymentLayout from './Components/PaymentLayout';
import TrialComplete from './Components/TrialComplete';
import SelectPlan from './Components/SelectPlan';
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

  handleIntroClick = () => {
    this.props.subscription.updateStep("selectPlan");
  }

  handleSelectPlanClick = () => {
    this.props.subscription.updateStep("checkout");
  }

  handleToggleShowSelected = () => {
    this.props.subscription.toggleShowSelected();
  }

  handleSegmentClick = (plan, planName, planCost) => {
    this.props.subscription.onPlanClick(plan, planName, planCost);
  }

  handleCardErrors = (event) => {
    this.props.subscription.handleCardErrors(event);
  }

  handleCardToken = (payload) => {
    this.props.subscription.handleCardToken(payload);
  }

  handleContinueClick = () => {
    this.props.handleContinueClick();
  }

  // <PaymentLayout>
  //   {currentStep}
  // </PaymentLayout>


  render() {
    const { currentClient,
            completedElements,
            currentClientAvatar } = this.props;

    const { planName,
            planCost,
            isLoading,
            cardErrors,
            cardSuccess,
            showSelected,
            selectedPlan,
            disableSubmit,
            subscriptionStep } = this.props.subscription;

    let currentStep = null;

    if (subscriptionStep === 'intro') {
      currentStep = (
        <TrialComplete
          currentClient={currentClient}
          handleIntroClick={this.handleIntroClick}
          currentClientAvatar={currentClientAvatar}
          completeActions={completedElements.length}
          handleDeleteAccount={this.props.handleDeleteAccount}
        />);
    } else if (subscriptionStep === 'selectPlan') {
      currentStep = (
        <SelectPlan
          planName={planName}
          showSelected={showSelected}
          selectedPlan={selectedPlan}
          currentClientAvatar={currentClientAvatar}
          handleSegmentClick={this.handleSegmentClick}
          handleContinueClick={this.handleSelectPlanClick}
          handleToggleShowSelected={this.handleToggleShowSelected}
        />);
    } else {
      currentStep = (
        <Checkout
          planName={planName}
          planCost={planCost}
          isLoading={isLoading}
          cardErrors={cardErrors}
          cardSuccess={cardSuccess}
          selectedPlan={selectedPlan}
          disableSubmit={disableSubmit}
          afterPaying={this.handleContinueClick}
          handleCardToken={this.handleCardToken}
          handleCardErrors={this.handleCardErrors}
          currentClientAvatar={currentClientAvatar}
        />);
    }

    return (
      <PaymentLayout>
        {currentStep}
      </PaymentLayout>
    );
  }
}

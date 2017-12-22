/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import PaymentLayout from './Components/PaymentLayout';
import TrialComplete from './Components/TrialComplete';
import SelectPlan from './Components/SelectPlan';
import Checkout from './Components/Checkout';

@inject('subscription') @observer
export default class Subscription extends Component {
  componentWillMount() {
    $crisp.push(['do', 'chat:hide']);
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

  handleSegmentClick = (plan, planName) => {
    this.props.subscription.onPlanClick(plan, planName);
  }

  handleCardErrors = (event) => {
    this.props.subscription.handleCardErrors(event);
  }

  handleContinueClick = () => {
    let planUrl = null;
    switch (this.props.subscription.selectedPlan) {
      case 'Fast':
        planUrl = 'https://app.acuityscheduling.com/catalog.php?owner=13659144&action=addCart&clear=1&id=340351';
        break;
      case 'Standard':
        planUrl = 'https://app.acuityscheduling.com/catalog.php?owner=13659144&action=addCart&clear=1&id=340348';
        break;
      case 'Starter':
        planUrl = 'https://app.acuityscheduling.com/catalog.php?owner=13659144&action=addCart&clear=1&id=339937';
        break;
      default:
        break;
    }
    window.open(planUrl, '_blank');

    this.props.handleContinueClick();
  }


  render() {
    const { currentClient,
            completedElements,
            currentClientAvatar } = this.props;

    const { planName,
            cardErrors,
            showSelected,
            selectedPlan,
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
          cardErrors={cardErrors}
          selectedPlan={selectedPlan}
          currentClientAvatar={currentClientAvatar}
          handleCardErrors={this.handleCardErrors}
        />);
    }

    return (
      <PaymentLayout>
        {currentStep}
      </PaymentLayout>
    );
  }
}

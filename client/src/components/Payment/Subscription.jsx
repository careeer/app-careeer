/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PaymentLayout from 'components/Payment/Components/PaymentLayout';
import TrialComplete from './Components/TrialComplete';
import SelectPlan from './Components/SelectPlan';

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

  handleToggleShowSelected = () => {
    this.props.subscription.toggleShowSelected();
  }

  handleSegmentClick = (plan, planName) => {
    this.props.subscription.onPlanClick(plan, planName);
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
      case 'Self':
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

    const { showSelected,
            selectedPlan,
            planName,
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
    } else {
      currentStep = (
        <SelectPlan
          planName={planName}
          showSelected={showSelected}
          selectedPlan={selectedPlan}
          currentClientAvatar={currentClientAvatar}
          handleSegmentClick={this.handleSegmentClick}
          handleContinueClick={this.handleContinueClick}
          handleToggleShowSelected={this.handleToggleShowSelected}
        />);
    }

    return (
      <PaymentLayout>
        {currentStep}
      </PaymentLayout>
    );
  }
}

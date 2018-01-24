/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Route } from 'react-router-dom';

import SubscriptionComplete from './SubscriptionComplete';
import PaymentLayout from './Components/PaymentLayout';
import CurtainsDown from './Components/CurtainsDown';
import PageHeader from './Components/PageHeader';
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

  handleFreeTrialClick = () => {
    this.props.subscription.updateStep('intro');
    this.props.history.push(`${this.props.match.url}`);
  }

  handleIntroClick = () => {
    this.props.subscription.updateStep('plans');
    this.props.history.push(`${this.props.match.url}/plans`);
  }

  handleSelectPlanClick = () => {
    this.props.subscription.updateStep('checkout');
    this.props.history.push(`${this.props.match.url}/plans/checkout`);
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

  handleAnimationComplete = () => {
    this.props.handleContinueClick();
  }


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
            subscriptionStep,
            animationVisible } = this.props.subscription;

    const introPath = `${this.props.match.url}`;
    const plansPath = `${this.props.match.url}/plans`;
    const checkoutPath = `${this.props.match.url}/plans/checkout`;

    return (
      <PaymentLayout>
        <div>
          <CurtainsDown
            visible={animationVisible}
            handleAnimationComplete={this.handleAnimationComplete}
          />
          <PageHeader
            introPath={introPath}
            plansPath={plansPath}
            checkoutPath={checkoutPath}
            handleTrialClick={this.handleFreeTrialClick}
            handleSubscriptionClick={this.handleIntroClick}
            handleSelectPaymentClick={this.handleSelectPlanClick}
            checkout={subscriptionStep === 'checkout'}
            freeTrial={subscriptionStep === 'intro' ||
                      subscriptionStep === 'checkout' ||
                      subscriptionStep === 'plans'}
            continueSubscription={subscriptionStep === 'plans' ||
                                  subscriptionStep === 'checkout'}
          />
          <Route
            exact
            path={introPath}
            render={() => (
              <TrialComplete
                currentClient={currentClient}
                handleIntroClick={this.handleIntroClick}
                currentClientAvatar={currentClientAvatar}
                completeActions={completedElements.length}
                handleDeleteAccount={this.props.handleDeleteAccount}
              />
            )}
          />
          <Route
            exact
            path={plansPath}
            render={() => (
              <SelectPlan
                planName={planName}
                showSelected={showSelected}
                selectedPlan={selectedPlan}
                currentClientAvatar={currentClientAvatar}
                handleSegmentClick={this.handleSegmentClick}
                handleContinueClick={this.handleSelectPlanClick}
                handleToggleShowSelected={this.handleToggleShowSelected}
              />
            )}
          />
          <Route
            path={checkoutPath}
            render={() => (
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
            )}
          />
        </div>
      </PaymentLayout>
    );
  }
}

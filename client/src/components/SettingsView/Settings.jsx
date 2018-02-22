/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Route, withRouter } from 'react-router-dom';
import { Dimmer, Image, Button } from 'semantic-ui-react';

import CloseButton from './Components/CloseButton';
import SettingsMain from './Components/SettingsMain';
import CareeerLogo from '../Lib/CareeerLogo';
import CreditCardChange from './Components/CreditCardChange';
import SubscriptionChange from './Components/SubscriptionChange';
import ModalComponent from '../CoachDashboard/Clients/ModalComponent';

import './Styles/Settings.scss';

@inject('user', 'subscription') @observer
class Settings extends Component {
  componentWillMount() {
    this.props.subscription.getPlan();
    this.props.roadmapElements.turnDimmerOn();
  }

  componentWillUnmount() {
    this.props.roadmapElements.turnDimmerOff();
  }

  handleSignOut = (e) => {
    e.preventDefault();

    const { user, history, roadmapElements } = this.props;
    const email = user.email;

    user.destroySession();
    roadmapElements.turnDimmerOff();

    history.push({
      pathname: '/signIn',
      state: { logoutEmail: email },
    });
  }

  handleChangePayment = (e) => {
    e.preventDefault();
    this.props.history.push(`${this.props.match.url}/paymentInfo`);
  }

  showSubscriptionSelection = (e) => {
    e.preventDefault();
    this.props.history.push(`${this.props.match.url}/subscription`);
  }

  handleChangeSubscription = (e) => {
    e.preventDefault();
    if (this.props.subscription.subscriptionAction === "upgrade") {
      this.props.subscription.showUpgradeModal();
    } else if (this.props.subscription.subscriptionAction === "downgrade") {
      this.props.subscription.showDowngradeModal();
    }

  }

  handleSegmentClick = (plan, planName, planCost) => {
    this.props.subscription.onPlanClick(plan, planName, planCost);
    if (this.props.subscription.subscriptionAction !== "none") {
      this.props.subscription.previewCharges();
    }
  }

  handleCardErrors = (event) => {
    this.props.subscription.handleCardErrors(event);
  }

  handleCardToken = (payload) => {
    this.props.subscription.updateCreditCard(payload, () => {
      this.handleCloseAndShowBanner('Credit card successfully changed', false);
    });
  }

  goBackToMain = () => {
    this.props.subscription.resetChangePlan();
    this.props.history.push(`${this.props.match.url}`);
  }

  handleCloseAndShowBanner = (message, showButton) => {
    this.props.handleUpdateCustomBanner(message, showButton);
    this.props.onCloseClick();
    this.props.handleShowCustomBanner();
  }

  handleCancelAccountClick = () => {
    this.props.subscription.showDeleteModal();
  }

  handleCloseModals = () => {
    this.props.subscription.closeSettingsModals();
  }

  handleUpgrade = () => {
    this.props.subscription.upgradeSubscription(() => {
      this.handleCloseAndShowBanner(`Subscription changed to ${this.props.subscription.planName}`, true);
    });
    this.handleCloseModals();
  }

  handleDowngrade = () => {
    this.props.subscription.downgradeSubscription(() => {
      this.handleCloseAndShowBanner(`Subscription changed to ${this.props.subscription.planName}`, true);
    });
    this.handleCloseModals();
  }

  deleteSubscription = () => {
    this.props.subscription.cancelSubscription(() => {
      this.handleCloseAndShowBanner(`Subscription cancelled`, false);
    });
    this.handleCloseModals();
  }

  render() {
    const mainPath = `${this.props.match.url}`;
    const paymentPath = `${this.props.match.url}/paymentInfo`;
    const subscriptionPath = `${this.props.match.url}/subscription`;

    const avatarUrl = this.props.roadmapElements.currentClientAvatar || 'https://res.cloudinary.com/careeer/image/upload/v1504959238/Careeer_logo_a3gu5x.png';

    const { cardInfo,
            planName,
            planCost,
            isLoading,
            cardErrors,
            previewCost,
            selectedPlan,
            disableSubmit,
            transactionDate,
            isDeleteModalOpen,
            isUpgradeModalOpen,
            subscriptionAction,
            subscriptionStatus,
            isDowngradeModalOpen,
            currentSubscriptionName } = this.props.subscription;

    const SettingsWithAccountOptions = () =>
      <div className="settingsLayout">
        <div className="messageBody settings">
          <h1 className="introHeader">
            {this.props.roadmapElements.currentClient}!
          </h1>
          <Image
            avatar
            alt="avatar"
            src={avatarUrl}
            className="avatar"
          />
        </div>
        <Route
          exact
          path={mainPath}
          render={() => (
            <SettingsMain
              selectedPlan={selectedPlan}
              onSignOutClick={this.handleSignOut}
              onChangePaymentClick={this.handleChangePayment}
              onChangeSubscriptionClick={this.showSubscriptionSelection}
              onCancelAccountClick={this.handleCancelAccountClick}
            />
          )}
        />
        <Route
          path={paymentPath}
          render={() => (
            <CreditCardChange
              cardInfo={cardInfo}
              isLoading={isLoading}
              cardErrors={cardErrors}
              disableSubmit={disableSubmit}
              onGoBackClick={this.goBackToMain}
              handleCardToken={this.handleCardToken}
              handleCardErrors={this.handleCardErrors}
              handleCloseAndShowBanner={this.handleCloseAndShowBanner}
            />
          )}
        />
        <Route
          exact
          path={subscriptionPath}
          render={() => (
            <SubscriptionChange
              isLoading={isLoading}
              cardErrors={cardErrors}
              previewCost={previewCost}
              selectedPlan={selectedPlan}
              onGoBackClick={this.goBackToMain}
              transactionDate={transactionDate}
              subscriptionAction={subscriptionAction}
              newPlan={{ name: planName, cost: planCost}}
              handleSegmentClick={this.handleSegmentClick}
              onSaveChanges={this.handleChangeSubscription}
              currentSubscriptionName={currentSubscriptionName}

            />
          )}
        />
        <ModalComponent
          negativeLabel="Go back"
          handleClose={this.handleCloseModals}
          isVisible={isDeleteModalOpen}
          modalHeader="Cancel subscription?"
          positiveLabel="Cancel subscription"
          modalContent="We understand that now is not the right time. We will save your roadmap, just login when you’re ready to keep going! "
          handlePositiveClick={this.deleteSubscription}
        />
        <ModalComponent
          negativeLabel="Cancel"
          handleClose={this.handleCloseModals}
          isVisible={isUpgradeModalOpen}
          modalHeader="Authorize transaction"
          positiveLabel="Authorize"
          modalContent={`You've changed your plan to ${planName}! We'll apply this change to your plan immediately, with a prorated $${previewCost} charge to your card today. On ${transactionDate} your subscription will be renewed at $${planCost}.`}
          handlePositiveClick={this.handleUpgrade}
        />
        <ModalComponent
          negativeLabel="Cancel"
          handleClose={this.handleCloseModals}
          isVisible={isDowngradeModalOpen}
          modalHeader="Authorize transaction"
          positiveLabel="Authorize"
          modalContent={`You've changed your plan to ${planName}! We'll apply this change to your plan immediately, with no charge to your card. On ${transactionDate} your card ending in ${cardInfo.card_last4} will be charged $${planCost}.`}
          handlePositiveClick={this.handleDowngrade}
        />
      </div>

      const SettingsNoAccountOptions = () =>
      <div className="settingsLayout">
        <div className="messageBody simpleSettings">
          <Button
            content="Log out"
            className="changeSubscriptionButton"
            onClick={this.handleSignOut}
          />
        </div>
      </div>

    return (
      <Dimmer
        page
        active
        inverted
        className="settingsDimmer"
      >
        <CareeerLogo />
        <CloseButton onCloseClick={this.props.onCloseClick} />
        {(subscriptionStatus !== "trial" && subscriptionStatus !== "cancelled" && subscriptionStatus !== "free") ? <SettingsWithAccountOptions /> :
        <SettingsNoAccountOptions />

        }
      </Dimmer>
    );
  }
}

export default withRouter(Settings);

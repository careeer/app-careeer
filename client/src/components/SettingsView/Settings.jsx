/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Route, withRouter } from 'react-router-dom';
import { Dimmer, Image } from 'semantic-ui-react';

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
  }

  handleSegmentClick = (plan, planName, planCost) => {
    this.props.subscription.onPlanClick(plan, planName, planCost);
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

  render() {
    const mainPath = `${this.props.match.url}`;
    const paymentPath = `${this.props.match.url}/paymentInfo`;
    const subscriptionPath = `${this.props.match.url}/subscription`;

    const avatarUrl = this.props.roadmapElements.currentClientAvatar || 'https://res.cloudinary.com/careeer/image/upload/v1504959238/Careeer_logo_a3gu5x.png';

    const { cardInfo,
            isLoading,
            cardErrors,
            selectedPlan,
            disableSubmit,
            isDeleteModalOpen,
            isUpgradeModalOpen,
            subscriptionAction,
            isDowngradeModalOpen } = this.props.subscription;

    return (
      <Dimmer
        page
        active
        inverted
        className="settingsDimmer"
      >
        <CareeerLogo />
        <CloseButton onCloseClick={this.props.onCloseClick} />
        <div className="settingsLayout">
          <div className="messageBody">
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
                selectedPlan={selectedPlan}
                onGoBackClick={this.goBackToMain}
                subscriptionAction={subscriptionAction}
                handleSegmentClick={this.handleSegmentClick}
                onSaveChanges={this.handleChangeSubscription}
                onCancelAccountClick={this.handleCancelAccountClick}
              />
            )}
          />
          <ModalComponent
            negativeLabel="Go back"
            handleClose={this.handleCloseModals}
            isVisible={isDeleteModalOpen}
            modalHeader="Cancel subscription and delete account?"
            positiveLabel="Cancel &amp; delete"
            modalContent="Are you sure? This action cannot be undone. You will lose access to your coach, toolbox, and roadmap. Start a new free trial any time."
            handlePositiveClick={this.archiveClient}
          />
          <ModalComponent
            negativeLabel="Cancel"
            handleClose={this.handleCloseModals}
            isVisible={isUpgradeModalOpen}
            modalHeader="Authorize transaction"
            positiveLabel="Authorize"
            modalContent="You&apos;ve changed your plan to Fast Track! We&apos;ll apply this change to your plan immediately, with a prorated $100 charge to your card today. On February 30th your subscription will be renewed at $350."
            handlePositiveClick={this.archiveClient}
          />
          <ModalComponent
            negativeLabel="Cancel"
            handleClose={this.handleCloseModals}
            isVisible={isDowngradeModalOpen}
            modalHeader="Authorize transaction"
            positiveLabel="Authorize"
            modalContent="You&apos;ve changed your plan to Self-Starter! We&apos;ll apply this change to your plan immediately, with no charge to your card. On February 30th your card ending in 1234 will be charged $50."
            handlePositiveClick={this.archiveClient}
          />
        </div>
      </Dimmer>
    );
  }
}

export default withRouter(Settings);

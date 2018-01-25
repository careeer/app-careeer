/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Route, withRouter } from 'react-router-dom';
import { Grid, Dimmer, Image } from 'semantic-ui-react';

import CloseButton from './CloseButton';
import SettingsMain from './SettingsMain';
import CareeerLogo from '../../Lib/CareeerLogo';
import SettingsChangePayment from './SettingsChangePayment';
import SettingsChangeSubscription from './SettingsChangeSubscription';

import '../Styles/Settings.scss';

@inject('user', 'subscription') @observer
class Settings extends Component {
  componentWillMount() {
    this.props.subscription.getPlan();
  }

  handleClick = (e) => {
    e.preventDefault();

    const { user, history, roadmapElements } = this.props;
    const email = user.email;

    user.destroySession();
    roadmapElements.turnDimmerOff();

    history.push({
      pathname: '/signIn',
      state: { logoutEmail: email }
    });
  }

  handleChangePayment = (e) => {
    e.preventDefault();
    this.props.history.push(`${this.props.match.url}/paymentInfo`);
    console.log("change payment");
  }

  showSubscriptionSelection = (e) => {
    e.preventDefault();
    this.props.history.push(`${this.props.match.url}/subscription`);
    console.log("change subscription");
  }

  handleChangeSubscription = (e) => {
    e.preventDefault();
    console.log("change subscription");
  }

  handleSegmentClick = (plan, planName, planCost) => {
    this.props.subscription.onPlanClick(plan, planName, planCost);
  }

  handleCardErrors = (event) => {
    this.props.subscription.handleCardErrors(event);
  }

  handleCardToken = (payload) => {
    console.log(payload);
    // this.props.subscription.handleCardToken(payload);
  }

  goBackToMain = () => {
    this.props.history.push(`${this.props.match.url}`);
  }

  render() {
    const mainPath = `${this.props.match.url}`;
    const paymentPath = `${this.props.match.url}/paymentInfo`;
    const subscriptionPath = `${this.props.match.url}/subscription`;

    const avatarUrl = this.props.roadmapElements.currentClientAvatar || 'https://res.cloudinary.com/careeer/image/upload/v1504959238/Careeer_logo_a3gu5x.png';

    const { cardInfo,
            isLoading,
            cardErrors,
            cardSuccess,
            selectedPlan,
            disableSubmit } = this.props.subscription;

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
            exact path={mainPath}
            render={() => (
              <SettingsMain
                selectedPlan={selectedPlan}
                onSignOutClick={this.handleClick}
                onChangePaymentClick={this.handleChangePayment}
                onChangeSubscriptionClick={this.showSubscriptionSelection}
              />
            )}
          />
          <Route
            path={paymentPath}
            render={() => (
              <SettingsChangePayment
                cardInfo={cardInfo}
                isLoading={isLoading}
                cardErrors={cardErrors}
                cardSuccess={cardSuccess}
                disableSubmit={disableSubmit}
                onGoBackClick={this.goBackToMain}
                handleCardToken={this.handleCardToken}
                handleCardErrors={this.handleCardErrors}
              />
            )}
          />
          <Route
            exact path={subscriptionPath}
            render={() => (
              <SettingsChangeSubscription
                selectedPlan={selectedPlan}
                onGoBackClick={this.goBackToMain}
                handleSegmentClick={this.handleSegmentClick}
                onSaveChanges={this.handleChangeSubscription}
                onCancelAccountClick={this.handleChangeSubscription}
              />
            )}
          />

        </div>
      </Dimmer>
    );
  }
}

export default withRouter(Settings);

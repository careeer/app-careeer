/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Route, withRouter } from 'react-router-dom';
import { Grid, Dimmer, Image } from 'semantic-ui-react';

import CloseButton from './CloseButton';
import SettingsMain from './SettingsMain';
import CareeerLogo from '../../Lib/CareeerLogo';


import '../Styles/Settings.scss';

@inject('user', 'subscription') @observer
class Settings extends Component {
  componentWillMount() {
    $crisp.push(['do', 'chat:hide']);
    this.props.subscription.getPlan();
  }

  componentWillUnmount() {
    $crisp.push(['do', 'chat:show']);
  }

  handleClick = (e) => {
    e.preventDefault();
    const { user, history } = this.props;
    const email = user.email;
    user.destroySession();
    history.push({
      pathname: '/signIn',
      state: { logoutEmail: email }
    });
  }

  handleChangePayment = (e) => {
    e.preventDefault();
    console.log("change payment");
  }

  handleChangeSubscription = (e) => {
    e.preventDefault();
    console.log("change subscription");
  }

  render() {
    const mainPath = `${this.props.match.url}`;
    const plansPath = `${this.props.match.url}/plans`;
    const checkoutPath = `${this.props.match.url}/plans/checkout`;

    const avatarUrl = this.props.roadmapElements.currentClientAvatar || 'https://res.cloudinary.com/careeer/image/upload/v1504959238/Careeer_logo_a3gu5x.png';
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
              className="avatar"
              src={avatarUrl}
            />
          </div>
          <Route
            exact path={mainPath}
            render={() => (
              <SettingsMain
                onSignOutClick={this.handleClick}
                selectedPlan={this.props.subscription.selectedPlan}
                onSignOutClick={this.handleClick}
                onChangePaymentClick={this.handleChangePayment}
                onChangeSubscriptionClick={this.handleChangeSubscription}
              />
            )}
          />
        </div>
      </Dimmer>
    );
  }
}

export default withRouter(Settings);

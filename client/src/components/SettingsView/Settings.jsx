/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Dimmer } from 'semantic-ui-react';

import CloseButton from './Components/CloseButton';
import CareeerLogo from '../Lib/CareeerLogo';
import SimpleSettings from './Components/SimpleSettings';
import SettingsWithAccountInfo from './Components/SettingsWithAccountInfo';

import './Styles/Settings.scss';

@inject('user', 'subscription') @observer
class Settings extends Component {
  componentWillMount() {
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
      pathname: '/login',
      state: { logoutEmail: email },
    });
  }

  handleCloseAndShowBanner = (message, showButton) => {
    this.props.handleUpdateCustomBanner(message, showButton);
    this.props.onCloseClick();
    this.props.handleShowCustomBanner();
  }

  render() {
    const { subscriptionStatus } = this.props.subscription;
    return (
      <Dimmer
        page
        active
        inverted
        className="settingsDimmer"
      >
        <CareeerLogo />
        <CloseButton onCloseClick={this.props.onCloseClick} />
        {
          (subscriptionStatus !== "trial" && subscriptionStatus !== "cancelled" && subscriptionStatus !== "free") ?
          <SettingsWithAccountInfo
            currentClientAvatar={this.props.roadmapElements.currentClientAvatar}
            currentClient={this.props.roadmapElements.currentClient}
            onSignOutClick={this.handleSignOut}
            handleCloseAndShowBanner={this.handleCloseAndShowBanner}
          /> :
          <SimpleSettings onSignOutClick={this.handleSignOut}/>
        }
      </Dimmer>
    );
  }
}

export default Settings;

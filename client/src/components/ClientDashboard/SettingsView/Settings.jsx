/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Route, withRouter } from 'react-router-dom';
import { Grid, Button, Dimmer } from 'semantic-ui-react';

import CloseButton from './CloseButton';
import CareeerLogo from '../../Lib/CareeerLogo';


import '../Styles/Settings.scss';

@inject('user') @observer
class Settings extends Component {
  componentWillMount() {
    $crisp.push(['do', 'chat:hide']);
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

  render() {
    console.log(this.props);
    return (
      <Dimmer
        page
        active
        inverted
        className="settingsDimmer"
      >
        <CareeerLogo />
        <CloseButton onCloseClick={this.props.onCloseClick} />
        <Button
          basic
          content="Sign Out"
          onClick={this.handleClick}
        />
      </Dimmer>
    );
  }
}

export default withRouter(Settings);

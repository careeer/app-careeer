/* eslint-disable */
import React from 'react';
import { inject, observer } from 'mobx-react';

import { Route, Redirect } from 'react-router-dom';

@inject('user') @observer
export default class AuthRoute extends React.Component {
  componentWillMount() {
    this.props.user.signIn();
  }

  render() {
    const { component: Component, ...rest } = this.props;

    if (this.props.user.isLoading) {
      return (null);
    }

    return (
      <Route
        {...rest}
        render={props => (
          this.props.user.signedIn ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: '/logIn' }} />
          )
        )}
      />
    );
  }
}

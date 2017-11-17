/* eslint-disable */
import React from 'react';
import { inject, observer } from 'mobx-react';
import { Dimmer, Loader } from 'semantic-ui-react';
import { Route, Redirect } from 'react-router-dom';

@inject('user') @observer
export default class AuthRoute extends React.Component {
  componentWillMount() {
    this.props.user.signIn();
  }

  render() {
    const { component: Component, ...rest } = this.props;

    if (this.props.user.isLoading) {
      return (
        <Dimmer
          page
          active
          inverted
        >
          <Loader size="medium" />
        </Dimmer>
      );
    }

    return (
      <Route
        {...rest}
        render={props => (
          this.props.user.signedIn ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: '/signIn' }} />
          )
        )}
      />
    );
  }
}

/* eslint-disable */
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class CreateAccountButton extends PureComponent {
  handleClick = (e) => {
    e.preventDefault();
    this.props.history.push('/createAccount');
  }

  render() {
    return (
      <Button
        content={this.props.buttonLabel}
        onClick={this.handleClick}
      />
    );
  }
}

export default withRouter(CreateAccountButton);

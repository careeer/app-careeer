/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Grid, Button } from 'semantic-ui-react';
import ThankYouMessage from './Components/ThankYouMessage';

import './Styles/SimpleOnBoarding.css';

@inject('roadmapElements') @observer
export default class SimpleOnBoarding extends Component {
  state = {
    submittedClient: false,
  }

  componentWillMount() {
    this.props.roadmapElements.resetClientParams();
    $crisp.push(["do", "chat:hide"]);
  }

  componentWillUnmount() {
    $crisp.push(["do", "chat:show"]);
  }

  handleClick = () => {
    this.handleCreateClient('Enter');
  };

  handleCreateClient = (keyPressed) => {
    const clientName = this.props.roadmapElements.currentClient;
    if (keyPressed === 'Enter' &&
        clientName.indexOf(" ") >= 0 &&
        clientName.length >= 4 &&
        !this.state.submittedClient) {
      this.setState({
        submittedClient: true,
      });
      this.props.roadmapElements.createClient();
    }
  }

  render() {
    const { handleClientInputChange,
            currentClient,
          } = this.props.roadmapElements;

    return (
      <div className="onBoarding">
        <ThankYouMessage clientName="Fred"/>
      </div>
    );
  }
}

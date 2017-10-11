/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import PageHeader from './Components/PageHeader';
import UserNamePrompt from './Components/UserNamePrompt';

@inject('roadmapElements') @observer
export default class OnBoardingName extends Component {
  state = {
    nameError: false,
    submittedClient: false,
  }

  componentWillMount() {
    this.props.roadmapElements.resetClientParams();
    $crisp.push(['do', 'chat:hide']);
  }

  componentWillUnmount() {
    $crisp.push(['do', 'chat:show']);
  }

  handleClick = () => {
    this.handleCreateClient('Enter');
  };

  handleCreateClient = (keyPressed) => {
    const clientName = this.props.roadmapElements.currentClient;
    if (keyPressed === 'Enter' &&
        !this.state.submittedClient) {
      if (clientName.indexOf(' ') >= 0 &&
          clientName.length > 4) {
        this.setState({
          nameError: false,
          submittedClient: true,
        });
        $crisp.push(["set", 'session:data', [[["ClientName", clientName]]]]);

        const firstName = clientName.split(" ", 1)[0];
        this.props.history.push(`/OnBoarding/thankyou/${firstName}`);
      } else {
        this.setState({
          nameError: true,
        });
      }
    }
  }

  render() {
    const { handleClientInputChange,
            currentClient,
          } = this.props.roadmapElements;

    return (
      <div className="outroOnboarding">
        <PageHeader
          counterLabel=""
          handleClick={this.handleClick}
          headerLinkLabel="Build your roadmap"
        />
        <UserNamePrompt
          createClient={this.handleCreateClient}
          currentClient={currentClient || ''}
          handleClientInputChange={handleClientInputChange}
          nameError={this.state.nameError}
        />
      </div>
    );
  }
}

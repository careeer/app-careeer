/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import PageHeader from './Components/PageHeader';
import UserNamePrompt from './Components/UserNamePrompt';
import DateHelper from '../Lib/DateHelper';
import defaultElements from '../Constants/DefaultRoadmapElements';


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
          clientName.length >= 4) {
        this.setState({
          nameError: false,
          submittedClient: true,
        });
        const today = DateHelper.formatedDate();
        const firstRoadmapElements = defaultElements.map(element => Object.assign({}, element, {
          dueDate: today,
        }));
        $crisp.push(["set", 'session:data', [[["ClientName", clientName]]]]);
        this.props.roadmapElements.createClientWithDefaults(firstRoadmapElements);

      } else {
        this.setState({
          nameError: true,
        });
      }
    }
  }

  checkIfNameIsFilled = () => {
    if (this.props.roadmapElements.hasClientName) {
      const firstName = this.props.roadmapElements.currentClient.split(" ", 1)[0];
      this.props.history.push(`/thankyou/${firstName}/${this.props.roadmapElements.currentClientSlug}`);
    }
  }

  render() {
    this.checkIfNameIsFilled();

    const { handleClientInputChange,
            currentClient,
          } = this.props.roadmapElements;

    return (
      <div className="onBoarding">
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

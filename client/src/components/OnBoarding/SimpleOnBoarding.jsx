/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Grid, Button } from 'semantic-ui-react';
import OnBoardingHeader from './OnBoardingHeader';

import OnBoardQuestion from './OnBoardQuestion';
import ThankYouMessage from './ThankYouMessage';
import IntroOnBoardingMessage from './IntroOnBoardingMessage';

import './Styles/SimpleOnBoarding.css';

@inject('roadmapElements')@observer
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

  // <OnBoardQuestion
  //   createClient={this.handleCreateClient}
  //   currentClient={currentClient}
  //   handleClientInputChange={handleClientInputChange}
  //   answerOptions={['first','second', 'tres']}
  // />

  // <BuildYourRoadmapLink handleClick={this.handleClick}/>

  render() {
    const { handleClientInputChange,
            currentClient,
          } = this.props.roadmapElements;

    return (
      <div className="simpleOnBoarding">
        <ThankYouMessage clientName="Fred"/>
      </div>
    );
  }
}

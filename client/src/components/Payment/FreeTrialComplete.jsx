/* eslint-disable */
import React, { Component } from 'react';
import TrialCompleteMessage from './Components/TrialCompleteMessage';
import TrialCompleteActions from './Components/TrialCompleteActions';
import PageHeader from './Components/PageHeader';

export default class FreeTrialComplete extends Component {
  componentWillMount() {
    $crisp.push(['do', 'chat:hide']);
  }

  componentWillUnmount() {
    $crisp.push(['do', 'chat:show']);
  }

  handleClick = () => {
    this.props.history.push('/freetrial');
  }

  redirectToQuestion = () => {
    this.props.history.push('/OnBoarding/Question_1');
  }

  render() {
    return (
      <div className="introOnboarding">
        <PageHeader

        />
        <TrialCompleteMessage
          clientName
          avatarUrl
          completeActions
        />
        <TrialCompleteActions
          handleContinueClick
          handleDeleteAccount
        />
      </div>
    );
  }
}

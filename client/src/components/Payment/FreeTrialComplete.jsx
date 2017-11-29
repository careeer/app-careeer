/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PageHeader from './Components/PageHeader';
import TrialCompleteMessage from './Components/TrialCompleteMessage';
import TrialCompleteActions from './Components/TrialCompleteActions';
import PaymentLayout from 'components/Payment/Components/PaymentLayout';

@inject('roadmapElements') @observer
export default class FreeTrialComplete extends Component {
  componentWillMount() {
    $crisp.push(['do', 'chat:hide']);
  }

  componentWillUnmount() {
    $crisp.push(['do', 'chat:show']);
  }

  handleContinueClick = () => {
    this.props.history.push('/freetrial');
  }

  handleDeleteAccount = () => {
    this.props.history.push('/freetrial');
  }

  render() {
    const { currentClient,
            completedElements,
            currentClientAvatar } = this.props.roadmapElements;

    return (
      <PaymentLayout>
        <PageHeader
          step="1"
        />
        <TrialCompleteMessage
          clientName={currentClient}
          avatarUrl={currentClientAvatar}
          completeActions={completedElements.length}
        />
        <TrialCompleteActions
          handleContinueClick={this.handleContinueClick}
          handleDeleteAccount={this.handleDeleteAccount}
        />
      </PaymentLayout>
    );
  }
}

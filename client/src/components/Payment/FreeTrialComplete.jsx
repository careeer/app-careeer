/* eslint-disable */
import React, { Component } from 'react';
import PageHeader from './Components/PageHeader';
import TrialCompleteMessage from './Components/TrialCompleteMessage';
import TrialCompleteActions from './Components/TrialCompleteActions';
import PaymentLayout from 'components/Payment/Components/PaymentLayout';

export default class FreeTrialComplete extends Component {
  componentWillMount() {
    $crisp.push(['do', 'chat:hide']);
  }

  componentWillUnmount() {
    $crisp.push(['do', 'chat:show']);
  }

  render() {
    const { currentClient,
            completedElements,
            currentClientAvatar } = this.props;

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
          handleContinueClick={this.props.handleContinueClick}
          handleDeleteAccount={this.props.handleDeleteAccount}
        />
      </PaymentLayout>
    );
  }
}

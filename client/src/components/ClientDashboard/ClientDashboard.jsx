/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import RoadmapLayout from './RoadmapElements/RoadmapLayout';
import Subscription from 'components/Subscription/Subscription';
import SubscriptionComplete from 'components/Subscription/SubscriptionComplete';
import ModalComponent from 'components/CoachDashboard/Clients/ModalComponent';

@inject('roadmapElements', 'subscription') @observer
class ClientDashboard extends Component {
  state = {
    open: false,
  }

  componentWillMount() {
    const { clientId } = this.props.match.params;
    if (clientId) {
      this.props.roadmapElements.resetClientParams();
      this.props.roadmapElements.getClient(
        clientId, () => {
          this.props.roadmapElements.fetchAll();
          history.replaceState(null, document.title, `/${this.props.roadmapElements.currentClientSlug}`);
        },
      );
    }
  }

  componentWillUnmount() {
    this.props.roadmapElements.resetClientParams();
  }

  show = () => this.setState({ open: true });

  close = () => this.setState({ open: false });

  archiveClient = () => {
    this.close();
    this.props.roadmapElements.deleteClient();
    this.props.history.push('/');
  }

  handleContinueClick = (planName) => {
    this.props.roadmapElements.updateClientAccount("paid");
    this.props.roadmapElements.updateClient();
    this.props.roadmapElements.updateCustomBanner(`Subscription started on ${planName}`, true);
  }

  handleDeleteAccount = () => {
    this.show();
  }

  render() {
    const { accountActive,
            currentClient,
            successfulPayment,
            completedElements,
            currentClientAvatar } = this.props.roadmapElements;
    if (!accountActive) {
      return (
        <div>
          <Subscription
            currentClient={currentClient}
            completedElements={completedElements}
            handleContinueClick={this.handleContinueClick}
            handleDeleteAccount={this.handleDeleteAccount}
            currentClientAvatar={currentClientAvatar || 'https://res.cloudinary.com/careeer/image/upload/v1504959238/Careeer_logo_a3gu5x.png'}
          />
          <ModalComponent
            negativeLabel="Cancel"
            handleClose={this.close}
            isVisible={this.state.open}
            modalHeader="Delete account?"
            positiveLabel="Delete account"
            modalContent="Are you sure? We will delete your account and roadmap. Come back anytime! "
            handlePositiveClick={this.archiveClient}
          />
        </div>
      );
    }

    if (successfulPayment) {
      return (
        <SubscriptionComplete {...this.props} />
      );
    }

    if (currentClient) {
      return (
        <RoadmapLayout {...this.props} />
      );
    }

    return null;
  }
}

export default ClientDashboard;

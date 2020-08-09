/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import RoadmapLayout from './RoadmapElements/RoadmapLayout';
import Subscription from 'components/Subscription/Subscription';
import SubscriptionComplete from 'components/Subscription/SubscriptionComplete';
import ModalComponent from 'components/CoachDashboard/Clients/ModalComponent';

@inject('roadmapElements', 'subscription')
@observer
class ClientDashboard extends Component {
  state = {
    open: false,
  };

  componentWillMount() {
    const { clientId } = this.props.match.params;
    if (clientId) {
      this.props.roadmapElements.resetClientParams();
      this.props.roadmapElements.getClient(clientId, () => {
        this.props.roadmapElements.fetchAll();
        history.replaceState(
          null,
          document.title,
          `/${this.props.roadmapElements.currentClientSlug}`
        );
      });
    }
    this.props.subscription.getPlan();
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
  };

  handleContinueClick = planName => {
    this.props.roadmapElements.updateClientAccount('paid');
    this.props.roadmapElements.updateClient();
    this.props.roadmapElements.updateCustomBanner(
      `Subscription started on ${planName}`,
      true
    );
  };

  handleDeleteAccount = () => {
    this.show();
  };

  render() {
    const {
      accountActive,
      currentClient,
      successfulPayment,
      completedElements,
      currentClientAvatar,
    } = this.props.roadmapElements;

    const { subscribed, subscriptionStatus } = this.props.subscription;

    const freeTrialComplete = subscriptionStatus !== 'trial' || !accountActive;

    const cancelledAccess = subscriptionStatus !== 'cancelled' || !subscribed;

    if (successfulPayment) {
      return <SubscriptionComplete {...this.props} />;
    }

    if (!subscriptionStatus) {
      return null;
    } else if (
      cancelledAccess &&
      freeTrialComplete &&
      subscriptionStatus !== 'active' &&
      subscriptionStatus !== 'free'
    ) {
      return (
        <div>
          <Subscription
            currentClient={currentClient}
            completedElements={completedElements}
            handleContinueClick={this.handleContinueClick}
            handleDeleteAccount={this.handleDeleteAccount}
            currentClientAvatar={
              currentClientAvatar ||
              'https://res.cloudinary.com/careeer/image/upload/v1504959238/Careeer_logo_a3gu5x.png'
            }
          />
          <ModalComponent
            negativeLabel="Cancel"
            handleClose={this.close}
            isVisible={this.state.open}
            modalHeader="Delete account?"
            positiveLabel="Delete account"
            modalContent="Are you sure? We will delete your account and roadmap. Come back anytime!"
            handlePositiveClick={this.archiveClient}
          />
        </div>
      );
    }

    if (currentClient) {
      return <RoadmapLayout {...this.props} />;
    }

    return null;
  }
}

export default ClientDashboard;

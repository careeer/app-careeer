/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import RoadmapLayout from './RoadmapElements/RoadmapLayout';
import Subscription from 'components/Subscription/Subscription';
import ModalComponent from 'components/CoachDashboard/Clients/ModalComponent';

@inject('roadmapElements') @observer
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
        }
      );

    }
  }

  componentWillUnmount() {
    this.props.roadmapElements.resetClientParams();
  }

  show = () => this.setState({ open: true });

  close = () => this.setState({ open: false });

  archiveClient = () => {
    const { currentClientSlug } = this.props.roadmapElements;
    this.close();
    this.props.roadmapElements.deleteClient();
    this.props.history.push('/');
  }

  handleContinueClick = () => {
    this.props.roadmapElements.updateClientAccount("paid");
    this.props.roadmapElements.updateClient();
    this.props.roadmapElements.showBanner();
  }

  handleDeleteAccount = () => {
    this.show();
  }

  render() {
    const { accountActive,
            currentClient,
            completedElements,
            currentClientAvatar } = this.props.roadmapElements;

    if (!accountActive){
      return (
        <div>
          <Subscription
            currentClient={currentClient}
            completedElements={completedElements}
            handleContinueClick={this.handleContinueClick}
            handleDeleteAccount={this.handleDeleteAccount}
            currentClientAvatar={currentClientAvatar || 'https://res.cloudinary.com/careeer/image/upload/v1504959238/Careeer_logo_a3gu5x.png'}
            {...this.props}
          />
          <ModalComponent
            negativeLabel="Cancel"
            positiveLabel="Delete account"
            handleClose={this.close}
            isVisible={this.state.open}
            modalHeader="Delete account?"
            modalContent="We understand that now is not the right time. Come back and start another free trial when you're ready."
            handlePositiveClick={this.archiveClient}
          />
        </div>
      );
    }

    return (
      <RoadmapLayout />
    );
  }
}

export default ClientDashboard;

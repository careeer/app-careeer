/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import RoadmapLayout from './RoadmapElements/RoadmapLayout';
import FreeTrialComplete from 'components/Payment/FreeTrialComplete';
import ModalComponent from 'components/CoachDashboard/Clients/ModalComponent';

@inject('roadmapElements', 'user') @observer
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
    this.props.user.deleteAccount(currentClientSlug);
    this.props.history.push('/');
  }

  handleContinueClick = () => {
    window.open('https://app.acuityscheduling.com/catalog.php?owner=13659144', '_blank');
    this.props.roadmapElements.updateClientAccount("paid");
    this.props.roadmapElements.updateClient();
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
          <FreeTrialComplete
            currentClient={currentClient}
            completedElements={completedElements}
            currentClientAvatar={currentClientAvatar}
            handleContinueClick={this.handleContinueClick}
            handleDeleteAccount={this.handleDeleteAccount}
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

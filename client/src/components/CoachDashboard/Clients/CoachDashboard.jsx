/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Grid } from 'semantic-ui-react';
import ClientList from './ClientList';
import LoadingScreen from '../../Lib/LoadingScreen';

import '../Styles/CoachDashboard.scss';

@inject('roadmapElements') @observer
export default class CoachDashboard extends Component {
  componentWillMount() {
    this.props.roadmapElements.getClients();
  }

  handleNewClientClick = () => {
    this.props.history.push('/Client/New');
  };

  handleExistingClientClick = (event, data) => {
    this.props.history.push(`/${data.value}`);
  };

  handleArchiveClick = (slug) => {
    this.props.roadmapElements.archiveClient(slug);
  };

  handleToolboxUpload = (slug, url) => {
    this.props.roadmapElements.updateClientToolbox(slug, url);
  }

  handleDuplicateClick = (copiedFrom) => {
    this.props.history.push(`/duplicate/${copiedFrom}`);
  };

  render() {
    return (
      <Grid className="defaultGrid">
        <LoadingScreen isLoading={this.props.roadmapElements.isClientLoading} />
        <Grid.Row>
          <Grid.Column>
            <ClientList
              currentClients={this.props.roadmapElements.clients.slice()}
              handleExistingClientClick={this.handleExistingClientClick}
              handleArchiveClick={this.handleArchiveClick}
              handleToolboxUpload={this.handleToolboxUpload}
              handleDuplicateClick={this.handleDuplicateClick}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

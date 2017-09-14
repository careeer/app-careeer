/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { List, Button, Icon, Grid } from 'semantic-ui-react';
import ClientList from './ClientList';
import { mainGridStyle } from '../Constants/CommonElementStyles';
import PlusButton from '../RoadmapElements/PlusButton';
import ClientElement from './ClientElement';

@inject('roadmapElements')@observer
export default class CoachDashboard extends Component {
  state = {
    archived: false,
  }

  componentWillMount() {
    this.props.roadmapElements.getClients();
  };

  handleNewClientClick = () => {
    this.props.history.push('/roadmap');
  };

  handleExistingClientClick = (event, data) => {
    this.props.roadmapElements.setUpClientObject({ name: data.name, slug: data.value });
    this.props.history.push(`/${data.value}`);
  };

  handleArchiveClick = (slug) => {
    this.props.roadmapElements.archiveClient(slug);
    this.setState({
      archived: true,
    });
  };

  handleDuplicateClick = (copiedFrom) => {
    this.props.history.push(`/duplicate/${copiedFrom}`);
  };

  render() {
    return (
      <Grid style={mainGridStyle}>
        <div>
          <Grid.Row>
            <Grid.Column floated="left">
              <ClientList
                currentClients={this.props.roadmapElements.clients.slice()}
                handleExistingClientClick={this.handleExistingClientClick}
                handleArchiveClick={this.handleArchiveClick}
                handleDuplicateClick={this.handleDuplicateClick}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column floated="left">
              <PlusButton
                buttonSize="massive"
                iconSize="large"
                handleFormOpen={this.handleNewClientClick}
              />
            </Grid.Column>
          </Grid.Row>
        </div>
      </Grid>
    );
  }
}

/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import DateHelper from '../Lib/DateHelper';
import defaultElements from '../Constants/DefaultRoadmapElements';
import ClientRoadmapDashboard from './RoadmapElements/ClientRoadmapDashboard';

@inject('roadmapElements') @observer
export default class ClientDashboard extends Component {
  componentWillMount() {
    if (this.props.match.params.clientId) {
      const client = this.props.match.params.clientId;
      this.props.roadmapElements.resetClientParams();
      this.props.roadmapElements.getClients();
      this.props.roadmapElements.setClientSlug(client);
      this.props.roadmapElements.fetchAll();
    }
  }

  componentWillUnmount() {
    this.props.roadmapElements.resetClientParams();
  }

  render() {
    return (
      <ClientRoadmapDashboard />
    );
  }
}

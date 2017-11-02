/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import DateHelper from '../Lib/DateHelper';
import defaultElements from '../Constants/DefaultRoadmapElements';
import RoadmapLayout from './RoadmapElements/RoadmapLayout';

@inject('roadmapElements') @observer
export default class ClientDashboard extends Component {
  componentWillMount() {
    const { clientId } = this.props.match.params;
    if (clientId) {
      this.props.roadmapElements.resetClientParams();
      this.props.roadmapElements.getClient(
        clientId, () => { this.props.roadmapElements.fetchAll();}
      );
    }
  }

  componentWillUnmount() {
    this.props.roadmapElements.resetClientParams();
  }

  render() {
    return (
      <RoadmapLayout />
    );
  }
}

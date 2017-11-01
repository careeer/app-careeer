/* eslint-disable */
import React, { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';

import RoadmapLayout from './RoadmapElements/RoadmapLayout';

@inject('roadmapElements') @observer
export default class ProxyClientDashboard extends PureComponent {
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
      <RoadmapLayout roadmapElements={this.props.roadmapElements} />
    );
  }
}

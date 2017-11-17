/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import RoadmapLayout from './RoadmapElements/RoadmapLayout';

@inject('roadmapElements') @observer
class ClientDashboard extends Component {
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

  render() {
    return (
      <RoadmapLayout />
    );
  }
}

export default ClientDashboard;

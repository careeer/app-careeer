/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import DateHelper from '../Lib/DateHelper';
import defaultElements from '../Constants/DefaultRoadmapElements';
import ClientRoadmapDashboard from '../ClientDashboard/RoadmapElements/ClientRoadmapDashboard';

@inject('roadmapElements') @observer
export default class ClientDashboard extends Component {
  state = {
    clientName: '',
  }

  componentWillMount() {
    if (this.props.match.params.clientName){
      this.setState({
        clientName: this.props.match.params.clientName,
      });
      if (this.props.roadmapElements.currentClient) {
        const today = DateHelper.formatedDate();
        const firstRoadmapElements = defaultElements.map(element => Object.assign({}, element, {
          dueDate: today,
        }));
        this.props.roadmapElements.createClientWithDefaults(firstRoadmapElements);
      }
    }
  }

  componentWillUnmount() {
    this.props.roadmapElements.resetClientParams();
  }

  checkIfNameIsFilled = () => {
    if (this.props.roadmapElements.hasClientName) {
      history.replaceState(null, document.title, `/${this.props.roadmapElements.currentClientSlug}`);
    }
  }

  render() {
    this.checkIfNameIsFilled();
    return (
      <ClientRoadmapDashboard clientName={this.state.clientName} />
    );
  }
}

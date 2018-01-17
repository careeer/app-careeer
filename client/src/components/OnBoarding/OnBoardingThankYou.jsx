/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import DateHelper from '../Lib/DateHelper';
import defaultElements from '../Constants/DefaultRoadmapElements';
import RoadmapLayout from '../ClientDashboard/RoadmapElements/RoadmapLayout';

@inject('roadmapElements') @observer
export default class OnBoardingThankYou extends Component {
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
      <RoadmapLayout clientName={this.state.clientName} />
    );
  }
}

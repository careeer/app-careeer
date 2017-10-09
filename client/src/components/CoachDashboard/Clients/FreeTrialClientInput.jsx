/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Grid } from 'semantic-ui-react';
import ClientInput from './ClientInput';
import DateHelper from '../../Lib/DateHelper';
import defaultElements from '../../Constants/DefaultRoadmapElements';

@inject('roadmapElements')@observer
export default class FreeTrialClientInput extends Component {
  componentWillMount() {
    this.props.roadmapElements.resetClientParams();
    history.replaceState(null, document.title, "/freetrial");
  }

  handleKeyPress = () => {
    const today = DateHelper.formatedDate();
    const firstRoadmapElements = defaultElements.map(element => Object.assign({}, element, {
      dueDate: today,
    }));
    this.props.roadmapElements.createClientWithDefaults(firstRoadmapElements);
  }

  checkIfNameIsFilled = () => {
    if (this.props.roadmapElements.hasClientName) {
      this.props.history.push(`/${this.props.roadmapElements.currentClientSlug}`);
    }
  }

  render() {
    this.checkIfNameIsFilled();
    return (
      <Grid className="defaultGrid">
        <Grid.Column>
          <ClientInput
            currentClient={this.props.roadmapElements.currentClient || ''}
            handleClientInputChange={this.props.roadmapElements.handleClientInputChange}
            createClient={this.handleKeyPress}
            placeholder="enter your first and last name"
          />
        </Grid.Column>
      </Grid>
    );
  }
}

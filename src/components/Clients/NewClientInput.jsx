/* eslint-disable */
import React from 'react';
import { inject, observer } from 'mobx-react';
import { Grid, Input } from 'semantic-ui-react';

@inject('roadmapElements')@observer
export default class NewClient extends React.Component {
  componentWillMount() {
    this.props.roadmapElements.resetClientParams();
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter' && this.props.roadmapElements.currentClient) {
      this.props.roadmapElements.createClient();
    }
  }

  render() {
    if (this.props.roadmapElements.hasClientName) {
      this.props.history.push(`/${this.props.roadmapElements.currentClientSlug}`);
    }
    return (
      <Grid.Column>
        <Input
          transparent
          fluid
          placeholder="enter client's first and last name"
          onKeyPress={this.handleKeyPress}
          name="clientName"
          value={this.props.roadmapElements.currentClient || ''}
          onChange={this.props.roadmapElements.handleClientInputChange}
        />
      </Grid.Column>
    );
  }
}

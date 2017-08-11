import React from "react";
import { observer } from 'mobx-react';
import { Grid, Input } from 'semantic-ui-react'

@observer(['roadmapElements'])
export default class NewClient extends React.Component {
  state = {
    isNameInputDisabled: false
  };

  handleKeyPress = (event) => {
    if (event.key == 'Enter' && this.props.roadmapElements.currentClient) {
      this.props.roadmapElements.createClient();
      this.setState({
        isNameInputDisabled: true,
      });

    }
  }

  render() {
    if (this.props.roadmapElements.hasClientName) {
      this.props.history.push(`/${this.props.roadmapElements.currentClientSlug}`);
    }
    return (
      <Grid.Column>
        <Input
          transparent={true}
          fluid={true}
          disabled={this.state.isNameInputDisabled}
          placeholder="enter client's first and last name" onKeyPress={this.handleKeyPress}
          name='clientName'
          value={this.props.roadmapElements.currentClient}
          onChange={this.props.roadmapElements.handleClientInputChange}
        />
      </Grid.Column>
    );
  }
}

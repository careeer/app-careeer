import React from "react";

export default class ClientHeader extends React.Component {

  render() {
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
  }
}

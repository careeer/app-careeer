import React from "react";
import { observer } from 'mobx-react';
import { Grid, Input } from 'semantic-ui-react'

export default class ClientHeader extends React.Component {

  render() {
    return (
      <Grid.Column>
        <Input
          transparent={true}
          fluid={true}
          disabled={this.props.disabled}
          placeholder={this.props.placeholder}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </Grid.Column>
  );
  }
}

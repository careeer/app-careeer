/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { List, Button, Icon, Grid } from 'semantic-ui-react';

@inject('roadmapElements')@observer
export default class ClientList extends Component {
  componentWillMount() {
    this.props.roadmapElements.getClients();
  }

  handleNewClientClick = () => {
    this.props.history.push('/roadmap');
  };

  handleOnClientNameClick = (event, data) => {
    this.props.roadmapElements.setUpClientObject({ name: data.name, slug: data.value });
    this.props.history.push(`/${data.value}`);
  }

  render() {
    const clients = this.props.roadmapElements.clients.map(
      client => (
        <List.Item
          key={client.id}
          onClick={this.handleOnClientNameClick}
          value={client.slug}
          name={client.name}
        >
          {client.name}
        </List.Item>
      ));

    return (
      <div>
        <Grid.Row>
          <Grid.Column floated="left">
            <List
              selection
              relaxed
              size="massive"
            >
              {clients}
            </List>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column
            floated="left"
            width={8}
          >
            <Button
              size="large"
              fluid
              onClick={this.handleNewClientClick}
            >
              <Icon
                size="large"
                inverted
                name="plus"
              />
            </Button>
          </Grid.Column>
        </Grid.Row>
      </div>
    );
  }
}

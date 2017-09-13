/* eslint-disable */
import React, { PureComponent } from 'react';
import { inject, observer } from 'mobx-react';
import { List, Button, Icon, Grid } from 'semantic-ui-react';
import { mainGridStyle, buttonStyle } from '../Constants/CommonElementStyles';
import ClientElement from './ClientElement';

@inject('roadmapElements')@observer
export default class ClientList extends PureComponent {
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
        <ClientElement
          key={client.id}
          onClientNameClick={this.handleOnClientNameClick}
          onArchiveClick={this.handleOnClientNameClick}
          onDuplicateClick={this.handleOnClientNameClick}
          clientSlug={client.slug}
          clientName={client.name}
        />
      ));

    return (
      <Grid style={mainGridStyle}>
        <div>
          <Grid.Row>
            <Grid.Column floated="left">
              {clients}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column
              floated="left"

            >
              <Button
                fluid
                size="massive"
                style={buttonStyle}
                onClick={this.handleNewClientClick}
              >
                <Icon
                  inverted
                  size="large"
                  name="plus"
                />
              </Button>
            </Grid.Column>
          </Grid.Row>
        </div>
      </Grid>
    );
  }
}

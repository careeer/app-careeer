import React, {Component} from 'react';
import { observer } from 'mobx-react';
import { List, Button, Icon, Input, Grid } from 'semantic-ui-react'

@observer(['roadmapElements'])
export default class ClientList extends Component {
  componentWillMount() {
    this.props.roadmapElements.getClients();
  }

  state = { showClientList: true };

  handleNewClientClick = () => {
    this.props.history.push('/roadmap');
  };

  handleOnClientNameClick = (event, data) => {
    this.props.history.push(`/${data.value}`);
  }

  render() {
    const clients = this.props.roadmapElements.clients.map((client)=>(
      <List.Item key={client.id} onClick={this.handleOnClientNameClick} value={client.slug}>
        {client.name}
      </List.Item>
    ));

    return (
      <Grid.Column floated='left' width={4}>
        <List selection={true} relaxed={true} size='massive'>
          {clients}
        </List>
        <Button size='large' fluid={true} onClick={this.handleNewClientClick} >
          <Icon size='large' inverted={true} name='plus' />
        </Button>
      </Grid.Column>
    );
  }
}

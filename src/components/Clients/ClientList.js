import React, {Component} from 'react';
import { observer } from 'mobx-react';
import { List, Button, Icon, Input, Grid } from 'semantic-ui-react'

@observer(['roadmapElements'])
export default class ClientList extends Component {
  componentWillMount() {
    this.props.roadmapElements.getClients();
  }

  state = { showClientList: true };

  handleNewClient = () => {
    this.setState({
      showClientList: !this.state.showClientList
    });
  };

  handleKeyPress = (event) => {
    if(event.key == 'Enter'){
      this.setState({
        isNameDisabled: true,
      });
    }
  };

  render() {
    const clients = this.props.roadmapElements.clients.map((client)=>(client.id, client.name
    ));
    console.log(this.props.roadmapElements.clients);
    if (this.state.showClientList) {
      return (
        <Grid.Column floated='left' width={4}>
          <List items={clients} size='massive' selection={true} relaxed={true}/>
          <Button size='large' fluid={true} onClick={this.handleNewClient} >
            <Icon size='large' inverted={true} name='plus' />
          </Button>
        </Grid.Column>
      );
    } else{
      return (
        <Grid.Column floated='left' width={8}>
          <Input
            transparent={true}
            fluid={true}
            placeholder="enter client's first and last name" onKeyPress={this.handleKeyPress}
            name='clientName'
          />
        </Grid.Column>
      );
    }
  }
}

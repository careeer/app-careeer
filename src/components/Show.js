import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react'

import { Switch, Route } from 'react-router-dom'

import RoadmapElementsDashboard from './Roadmaps/RoadmapElementsDashboard';
import ClientList from './Clients/ClientList';

import './Show.css';

class Show extends Component {
  render() {
    return (
      <Grid>
        <Switch>
          <Route exact path='/' component={RoadmapElementsDashboard}/>
          <Route path='/roadmap' component={RoadmapElementsDashboard}/>
          <Route path='/clients' component={ClientList}/>
          <Route path='/:clientId' component={RoadmapElementsDashboard}/>
        </Switch>
      </Grid>
    );
  }
}
export default Show;

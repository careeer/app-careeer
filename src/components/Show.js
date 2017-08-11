import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react'

import { Switch, Route } from 'react-router-dom'

import ClientRoadmapDashboard from './Roadmaps/ClientRoadmapDashboard';
import ClientList from './Clients/ClientList';

import './Show.css';

class Show extends Component {
  render() {
    return (
      <Grid>
        <Switch>
          <Route exact path='/' component={ClientRoadmapDashboard}/>
          <Route path='/roadmap' component={ClientRoadmapDashboard}/>
          <Route path='/clients' component={ClientList}/>
          <Route path='/:clientId' component={ClientRoadmapDashboard}/>
        </Switch>
      </Grid>
    );
  }
}
export default Show;

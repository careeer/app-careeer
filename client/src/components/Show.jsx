import React from 'react';
import { Grid } from 'semantic-ui-react';

import { Switch, Route } from 'react-router-dom';

import ClientRoadmapDashboard from './RoadmapElements/ClientRoadmapDashboard';
import ClientList from './Clients/ClientList';
import NewClientInput from './Clients/NewClientInput';
import RedirectToCareeer from './Helper/RedirectToCareeer';

import './Show.css';

const Show = () => (
  <Grid>
    <Switch>
      <Route exact path="/" component={RedirectToCareeer} />
      <Route path="/roadmap" component={NewClientInput} />
      <Route path="/clients" component={ClientList} />
      <Route path="/:clientId" component={ClientRoadmapDashboard} />
    </Switch>
  </Grid>
);

export default Show;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ClientRoadmapDashboard from './RoadmapElements/ClientRoadmapDashboard';
import ClientList from './Clients/ClientList';
import NewClientInput from './Clients/NewClientInput';
import DuplicateClientInput from './Clients/DuplicateClientInput';
import RedirectToCareeer from './Helper/RedirectToCareeer';

import './Show.css';

const Show = () => (
  <Switch>
    <Route exact path="/" component={RedirectToCareeer} />
    <Route path="/roadmap" component={NewClientInput} />
    <Route path="/duplicate/:clientId" component={DuplicateClientInput} />
    <Route path="/clients" component={ClientList} />
    <Route path="/:clientId" component={ClientRoadmapDashboard} />
  </Switch>
);

export default Show;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ClientRoadmapDashboard from './RoadmapElements/ClientRoadmapDashboard';
import CoachDashboard from './Clients/CoachDashboard';
import NewClientInput from './Clients/NewClientInput';
import FreeTrialClientInput from './Clients/FreeTrialClientInput';
import DuplicateClientInput from './Clients/DuplicateClientInput';
import RedirectToCareeer from './Helper/RedirectToCareeer';

import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={RedirectToCareeer} />
    <Route exact path="/freetrial" component={FreeTrialClientInput} />
    <Route path="/roadmap" component={NewClientInput} />
    <Route path="/duplicate/:clientId" component={DuplicateClientInput} />
    <Route path="/clients" component={CoachDashboard} />
    <Route path="/:clientId" component={ClientRoadmapDashboard} />
  </Switch>
);

export default App;

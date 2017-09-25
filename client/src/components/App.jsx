import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ClientRoadmapDashboard from './Roadmaps/RoadmapElements/ClientRoadmapDashboard';
import CoachDashboard from './Coach/Clients/CoachDashboard';
import NewClientInput from './Coach/Clients/NewClientInput';
import FreeTrialClientInput from './Coach/Clients/FreeTrialClientInput';
import DuplicateClientInput from './Coach/Clients/DuplicateClientInput';
import RedirectToCareeer from './Lib/RedirectToCareeer';

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

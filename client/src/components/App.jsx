import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ClientRoadmapDashboard from './Roadmaps/RoadmapElements/ClientRoadmapDashboard';
import CoachDashboard from './Coach/Clients/CoachDashboard';
import NewClientInput from './Coach/Clients/NewClientInput';
import FreeTrialWelcome from './LandingPage/FreeTrialWelcome';
import FreeTrialClientInput from './Coach/Clients/FreeTrialClientInput';
import SimpleOnBoarding from './OnBoarding/SimpleOnBoarding';
import DuplicateClientInput from './Coach/Clients/DuplicateClientInput';
import RedirectToCareeer from './Lib/RedirectToCareeer';

import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={RedirectToCareeer} />
    <Route exact path="/freetrial" component={FreeTrialWelcome} />
    <Route exact path="/freetrialclient" component={FreeTrialClientInput} />
    <Route exact path="/OnBoarding" component={SimpleOnBoarding} />
    <Route path="/roadmap" component={NewClientInput} />
    <Route path="/duplicate/:clientId" component={DuplicateClientInput} />
    <Route path="/clients" component={CoachDashboard} />
    <Route path="/:clientId" component={ClientRoadmapDashboard} />
  </Switch>
);

export default App;

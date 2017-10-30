import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ClientDashboard from './ClientDashboard/ClientDashboard';
import CoachDashboard from './CoachDashboard/Clients/CoachDashboard';
import NewClientInput from './CoachDashboard/Clients/NewClientInput';
import FreeTrialWelcome from './LandingPage/FreeTrialWelcome';

import LongWelcome from './LandingPage/LongWelcome';
import OnBoardingIntro from './OnBoarding/OnBoardingIntro';
import OnBoardingQuestion from './OnBoarding/OnBoardingQuestion';
import OnBoardingQuestion2 from './OnBoarding/OnBoardingQuestion2';
import OnBoardingQuestion3 from './OnBoarding/OnBoardingQuestion3';
import OnBoardingName from './OnBoarding/OnBoardingName';
import OnBoardingThankYou from './OnBoarding/OnBoardingThankYou';
import DuplicateClientInput from './CoachDashboard/Clients/DuplicateClientInput';
import Users from './Users';
import Sessions from './Sessions';

const App = () => (
  <Switch>
    <Route exact path="/" component={Users.New} />
    <Route exact path="/LongWelcome" component={LongWelcome} />
    <Route exact path="/freetrial" component={FreeTrialWelcome} />
    <Route exact path="/OnBoarding/Intro" component={OnBoardingIntro} />
    <Route exact path="/OnBoarding/Question_1" component={OnBoardingQuestion} />
    <Route exact path="/OnBoarding/Question_2" component={OnBoardingQuestion2} />
    <Route exact path="/OnBoarding/Question_3" component={OnBoardingQuestion3} />
    <Route exact path="/OnBoarding/Name" component={OnBoardingName} />
    <Route exact path="/sign_in" component={Sessions.New} />
    <Route path="/roadmap" component={NewClientInput} />
    <Route path="/duplicate/:clientId" component={DuplicateClientInput} />
    <Route path="/clients" component={CoachDashboard} />
    <Route path="/OnBoarding/thankyou/:clientName" component={OnBoardingThankYou} />
    <Route path="/:clientId" component={ClientDashboard} />
  </Switch>
);

export default App;

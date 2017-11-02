import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ClientDashboard from './ClientDashboard/ClientDashboard';
import CoachDashboard from './CoachDashboard/Clients/CoachDashboard';
import NewClientInput from './CoachDashboard/Clients/NewClientInput';
import FreeTrialWelcome from './LandingPage/FreeTrialWelcome';

import OnBoardingIntro from './OnBoarding/OnBoardingIntro';
import OnBoardingQuestion from './OnBoarding/OnBoardingQuestion';
import OnBoardingQuestion2 from './OnBoarding/OnBoardingQuestion2';
import OnBoardingQuestion3 from './OnBoarding/OnBoardingQuestion3';
import OnBoardingName from './OnBoarding/OnBoardingName';
import OnBoardingThankYou from './OnBoarding/OnBoardingThankYou';
import DuplicateClientInput from './CoachDashboard/Clients/DuplicateClientInput';
import Users from './Users';
import Sessions from './Sessions';
import AuthRoute from './Lib/AuthRoute';


const App = () => (
  <Switch>
    <Route exact path="/login" component={Sessions.New} />
    <Route exact path="/sign_up" component={Users.New} />
    <Route exact path="/" component={Users.New} />

    <AuthRoute exact path="/freetrial" component={FreeTrialWelcome} />
    <AuthRoute exact path="/OnBoarding/Intro" component={OnBoardingIntro} />
    <AuthRoute exact path="/OnBoarding/Question_1" component={OnBoardingQuestion} />
    <AuthRoute exact path="/OnBoarding/Question_2" component={OnBoardingQuestion2} />
    <AuthRoute exact path="/OnBoarding/Question_3" component={OnBoardingQuestion3} />
    <AuthRoute exact path="/OnBoarding/Name" component={OnBoardingName} />
    <AuthRoute path="/OnBoarding/thankyou/:clientName" component={OnBoardingThankYou} />
    <AuthRoute path="/Client/New" component={NewClientInput} />
    <AuthRoute path="/duplicate/:clientId" component={DuplicateClientInput} />
    <AuthRoute path="/clients" component={CoachDashboard} />
    <AuthRoute path="/:clientId" component={ClientDashboard} />
  </Switch>
);

export default App;

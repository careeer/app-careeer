import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ClientDashboard from './ClientDashboard/ClientDashboard';
import CoachDashboard from './CoachDashboard/Clients/CoachDashboard';
import Payment from './Subscription';
import LandingPage from './LandingPage';
import OnBoardingIntro from './OnBoarding/OnBoardingIntro';
import OnBoardingQuestion from './OnBoarding/OnBoardingQuestion';
import OnBoardingQuestion2 from './OnBoarding/OnBoardingQuestion2';
import OnBoardingQuestion3 from './OnBoarding/OnBoardingQuestion3';
import OnBoardingName from './OnBoarding/OnBoardingName';
import OnBoardingThankYou from './OnBoarding/OnBoardingThankYou';
import Users from './Users';
import Sessions from './Sessions';
import AuthRoute from './Lib/AuthRoute';
import Homepage from './Homepage/Homepage';

const App = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/faq" component={Homepage} />
    <Route exact path="/about" component={Homepage} />
    <Route path="/login" component={Sessions.New} />
    <Route path="/createAccount" component={Users.New} />
    <Route path="/users/password/:tk" component={Sessions.ResetPassword} />
    <AuthRoute path="/freetrial/end" component={Payment.FreeTrialComplete} />
    <AuthRoute path="/freetrial" component={LandingPage.FreeTrialWelcome} />
    <AuthRoute path="/OnBoarding/Intro" component={OnBoardingIntro} />
    <AuthRoute path="/OnBoarding/Question_1" component={OnBoardingQuestion} />
    <AuthRoute path="/OnBoarding/Question_2" component={OnBoardingQuestion2} />
    <AuthRoute path="/OnBoarding/Question_3" component={OnBoardingQuestion3} />
    <AuthRoute path="/OnBoarding/Name" component={OnBoardingName} />
    <AuthRoute path="/OnBoarding/thankyou/:clientName" component={OnBoardingThankYou} />
    <AuthRoute path="/clients" component={CoachDashboard} />
    <AuthRoute path="/:clientId" component={ClientDashboard} />
  </Switch>
);

export default App;

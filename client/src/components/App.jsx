/* eslint-disable */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ClientDashboard from 'components/ClientDashboard/ClientDashboard';
import CoachDashboard from 'components/CoachDashboard/Clients/CoachDashboard';
import NewClientInput from 'components/CoachDashboard/Clients/NewClientInput';
import LandingPage from 'components/LandingPage';
import Payment from 'components/Subscription';

import OnBoardingIntro from 'components/OnBoarding/OnBoardingIntro';
import OnBoardingQuestion from 'components/OnBoarding/OnBoardingQuestion';
import OnBoardingQuestion2 from 'components/OnBoarding/OnBoardingQuestion2';
import OnBoardingQuestion3 from 'components/OnBoarding/OnBoardingQuestion3';
import OnBoardingName from 'components/OnBoarding/OnBoardingName';
import OnBoardingThankYou from './OnBoarding/OnBoardingThankYou';
import DuplicateClientInput from './CoachDashboard/Clients/DuplicateClientInput';
import Users from './Users';
import Sessions from './Sessions';
import AuthRoute from './Lib/AuthRoute';


const App = () => (
  <Switch>
    <Route exact path="/" component={LandingPage.Main} />
    <Route exact path="/faq" component={LandingPage.Main} />
    
    <Route path="/partners/:partnerId" component={LandingPage.Main} />
    <Route path="/signIn" component={Sessions.New} />
    <Route path="/createAccount" component={Users.New} />
    <Route path="/ResetPassword" component={Sessions.ResetPassword} />
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
    <AuthRoute path="/Client/New" component={NewClientInput} />
    <AuthRoute path="/duplicate/:clientId" component={DuplicateClientInput} />
    <AuthRoute path="/:clientId" component={ClientDashboard} />
  </Switch>
);

export default App;

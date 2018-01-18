/* eslint-disable */
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Header } from 'semantic-ui-react';

import Home from './Home';
import FAQ from './FAQ';
import Footer from './Footer';
import CareeerLogo from '../Lib/CareeerLogo';

@inject('subscription') @observer
class Main extends Component {
  handleSegmentClick = (plan, planName, planCost) => {
    this.props.subscription.onPlanClick(plan, planName, planCost);
  }

  // <Route exact path="/faq" component={LandingPage.Main} />

  render() {
    return (
      <div>
        <Header className="mainHeader">
          <Link to="/" className="careeer">C!</Link>
          <Link to="/faq" className="faqLink">FAQ</Link>
          <Link to="/signIn" className="signInLink">Sign In</Link>
        </Header>
        <Route
          exact
          path="/"
          render={() => (
            <Home
              handleSegmentClick={this.handleSegmentClick}
              selectedAccount="Standard"
            />
          )}
        />
        <Route
          exact
          path="/faq"
          render={() => (
            <FAQ />
          )}
        />
        <Footer />
      </div>
    );
  }
}

export default Main;

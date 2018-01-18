/* eslint-disable */
<<<<<<< Updated upstream
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import CareeerLogo from '../Lib/CareeerLogo';
import MainHeadline from './MainHeadline';
import ReviewSlider from './ReviewSlider';
import ReviewSliderMobile from './ReviewSliderMobile';
import Timeline from './Timeline';
import Pricing from './Pricing';
import Footer from './Footer';
||||||| merged common ancestors
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';

import Footer from './Footer';
import Pricing from './Pricing';
import Timeline from './Timeline';
import MainHeadline from './MainHeadline';
import ReviewSlider from './ReviewSlider';
import CareeerLogo from '../Lib/CareeerLogo';
import ReviewSliderMobile from './ReviewSliderMobile';
=======
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Home from './Home';
import FAQ from './FAQ';
import Footer from './Footer';
import CareeerLogo from '../Lib/CareeerLogo';

>>>>>>> Stashed changes

class Main extends PureComponent {
  handleSegmentClick = () => {
    // placeholder
  }

  // <Route exact path="/faq" component={LandingPage.Main} />

  render() {
    return (
      <div>
        <CareeerLogo />
        <Link to="/faq" className="faqLink">FAQ</Link>
        <Link to="/signIn" className="signInLink">Sign In</Link>
<<<<<<< Updated upstream
        <Grid id="landingPage">
          <MainHeadline />
          <ReviewSlider />
          <ReviewSliderMobile />
          <Timeline />
          <Pricing
            selectedAccount={'Standard'}
            handleSegmentClick={this.handleSegmentClick}
          />
          <Footer />
        </Grid>
||||||| merged common ancestors
        <Grid id="landingPage">
          <MainHeadline selectedAccount={this.props.subscription.selectedPlan} />
          <ReviewSlider />
          <ReviewSliderMobile />
          <Timeline />
          <Pricing
            selectedAccount={this.props.subscription.selectedPlan}
            handleSegmentClick={this.handleSegmentClick}
          />
          <Footer />
        </Grid>
=======
        <Route
          exact
          path="/"
          render={() => (
            <Home
              handleSegmentClick={this.handleSegmentClick}
              selectedAccount={this.props.subscription.selectedPlan}
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
>>>>>>> Stashed changes
      </div>
    );
  }
}

export default Main;

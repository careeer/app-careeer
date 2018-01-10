/* eslint-disable */
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

@inject('subscription') @observer
class Main extends Component {
  handleSegmentClick = (plan, planName, planCost) => {
    this.props.subscription.onPlanClick(plan, planName, planCost);
  }

  render() {
    return (
      <div>
        <CareeerLogo />
        <Link to="/signIn" className="signInLink">Sign In</Link>
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
      </div>
    );
  }
}

export default Main;

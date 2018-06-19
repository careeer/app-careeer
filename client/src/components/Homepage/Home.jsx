import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Sidebar, Dimmer } from 'semantic-ui-react';

import HeroSection from './Components/HeroSection';
import MissionSection from './Components/MissionSection';
import WhatWeDoSection from './Components/WhatWeDoSection';
import RoadmapSection from './Components/RoadmapSection';
import OnDemandCoachSection from './Components/OnDemandCoachSection';
import TestimonialsSection from './Components/TestimonialsSection';
import MonthlySubscriptionsSection from './Components/MonthlySubscriptionsSection';
import Footer from './Components/Footer';
import SideNav from './Components/SideNav';

import './Styles/Homepage.scss';

class Home extends Component {
  handleAboutUsClick = () => {
    this.props.handleSideNavClick();

    // eslint-disable-next-line
    this.props.history.push('/about');
  }

  handlePricingClick = () => {
    this.props.handleSideNavClick();

    setTimeout(() => {
      const element = document.getElementById('pricing');
      if (element) element.scrollIntoView();
    }, 0);
  }

  handleLoginClick = () => {
    this.props.handleSideNavClick();

    // eslint-disable-next-line
    this.props.history.push('/login');
  }

  handleSignUpClick = () => {
    this.props.handleSideNavClick();

    // eslint-disable-next-line
    this.props.history.push('/createAccount');
  }

  render() {
    return (
      <div>
        <SideNav
          visible={this.props.showSideNav}
          handleAboutUsClick={this.handleAboutUsClick}
          handlePricingClick={this.handlePricingClick}
          handleLoginClick={this.handleLoginClick}
          handleSignUpClick={this.handleSignUpClick}
        />
        <Sidebar.Pushable>
          <Sidebar.Pusher>
            <Dimmer.Dimmable
              blurring
              inverted
              dimmed={this.props.showSideNav}
            >
              <HeroSection />
              <MissionSection />
              <WhatWeDoSection />
              <RoadmapSection />
              <OnDemandCoachSection />
              <TestimonialsSection />
              <MonthlySubscriptionsSection />
              <Footer />
              <Dimmer active={this.props.showSideNav} />
            </Dimmer.Dimmable>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

Home.propTypes = {
  showSideNav: PropTypes.bool.isRequired,
  handleSideNavClick: PropTypes.func.isRequired,
};

export default withRouter(Home);

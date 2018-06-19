import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Sidebar, Dimmer } from 'semantic-ui-react';

import HeroSection from './HeroSection';
import MissionSection from './MissionSection';
import WhatWeDoSection from './WhatWeDoSection';
import RoadmapSection from './RoadmapSection';
import OnDemandCoachSection from './OnDemandCoachSection';
import TestimonialsSection from './TestimonialsSection';
import PricingSection from './PricingSection';
import Footer from './Footer';
import SideNav from './SideNav';

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
              <PricingSection />
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

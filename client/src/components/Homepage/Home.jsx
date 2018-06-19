import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  onMenuClick = () => {
    this.props.handleSideNavClick();
  }

  render() {
    return (
      <div>
        <SideNav
          visible={this.props.showSideNav}
          onMenuClick={this.onMenuClick}
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

export default Home;

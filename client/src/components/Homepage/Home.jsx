import React, { Component } from 'react';
import { Sidebar, Dimmer } from 'semantic-ui-react';

import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import WhatWeDoSection from './Components/WhatWeDoSection';
import PersonalizedRoadmapSection from './Components/PersonalizedRoadmapSection';
import OnDemandCoachSection from './Components/OnDemandCoachSection';
import TestimonialsSection from './Components/TestimonialsSection';
import MonthlySubscriptionsSection from './Components/MonthlySubscriptionsSection';
import Footer from './Components/Footer';
import SideNav from './Components/SideNav';

class Home extends Component {
  state = {
    showSideNav: false,
  }

  onMenuClick = () => {
    this.setState({
      showSideNav: !this.state.showSideNav,
    });
  }

  render() {
    return (
      <div id="landingPage">
        <Header onMenuClick={this.onMenuClick} />
        <SideNav visible={this.state.showSideNav} onMenuClick={this.onMenuClick} />
        <Sidebar.Pushable>
          <Sidebar.Pusher>
            <Dimmer.Dimmable blurring inverted="true" dimmed={this.state.showSideNav}>
              <HeroSection />
              <WhatWeDoSection />
              <PersonalizedRoadmapSection />
              <OnDemandCoachSection />
              <TestimonialsSection />
              <MonthlySubscriptionsSection />
              <Footer />
              <Dimmer active={this.state.showSideNav} />
            </Dimmer.Dimmable>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default Home;

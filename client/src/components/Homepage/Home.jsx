import React from 'react';
import { Sidebar } from 'semantic-ui-react';

import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import WhatWeDoSection from './Components/WhatWeDoSection';
import PersonalizedRoadmapSection from './Components/PersonalizedRoadmapSection';
import OnDemandCoachSection from './Components/OnDemandCoachSection';
import TestimonialsSection from './Components/TestimonialsSection';
import MonthlySubscriptionsSection from './Components/MonthlySubscriptionsSection';
import Footer from './Components/Footer';
import SideNav from './Components/SideNav';

const Home = () => (
  <div id="landingPage">
    <Header />
    <Sidebar.Pushable>
      <SideNav visible={false} />
      <Sidebar.Pusher>
        <HeroSection />
        <WhatWeDoSection />
        <PersonalizedRoadmapSection />
        <OnDemandCoachSection />
        <TestimonialsSection />
        <MonthlySubscriptionsSection />
        <Footer />
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  </div>
);

export default Home;

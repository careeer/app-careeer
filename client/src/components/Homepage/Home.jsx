import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import WhoWeAreSection from './Components/WhoWeAreSection';
import WhatWeDoSection from './Components/WhatWeDoSection';
import PersonalizedRoadmapSection from './Components/PersonalizedRoadmapSection';
import OnDemandCoachSection from './Components/OnDemandCoachSection';
import TestimonialsSection from './Components/TestimonialsSection';
import MonthlySubscriptionsSection from './Components/MonthlySubscriptionsSection';

const Home = () => (
  <div id="landingPage">
    <Header />
    <HeroSection />
    <WhoWeAreSection />
    <WhatWeDoSection />
    <PersonalizedRoadmapSection />
    <OnDemandCoachSection />
    <TestimonialsSection />
    <MonthlySubscriptionsSection />
  </div>
);

export default Home;

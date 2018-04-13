import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import WhoWeAreSection from './Components/WhoWeAreSection';
import WhatWeDoSection from './Components/WhatWeDoSection';
import PersonalizedRoadmapSection from './Components/PersonalizedRoadmapSection';
import OnDemandCoachSection from './Components/OnDemandCoachSection';

const Home = () => (
  <div id="landingPage">
    <Header />
    <HeroSection />
    <WhoWeAreSection />
    <WhatWeDoSection />
    <PersonalizedRoadmapSection />
    <OnDemandCoachSection />
  </div>
);

export default Home;

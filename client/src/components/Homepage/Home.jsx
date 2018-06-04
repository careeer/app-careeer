import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import WhatWeDoSection from './Components/WhatWeDoSection';
import PersonalizedRoadmapSection from './Components/PersonalizedRoadmapSection';
import OnDemandCoachSection from './Components/OnDemandCoachSection';
import TestimonialsSection from './Components/TestimonialsSection';
import MonthlySubscriptionsSection from './Components/MonthlySubscriptionsSection';
import Footer from './Components/Footer';

const Home = () => (
  <div id="landingPage">
    <Header />
    <HeroSection />
    <WhatWeDoSection />
    <PersonalizedRoadmapSection />
    <OnDemandCoachSection />
    <TestimonialsSection />
    <MonthlySubscriptionsSection />
    <Footer />
  </div>
);

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import CareeerLogo from '../Lib/CareeerLogo';
import MainHeadline from './MainHeadline';
import ReviewSlider from './ReviewSlider';
import ReviewSliderMobile from './ReviewSliderMobile';
import Timeline from './Timeline';
import Pricing from './Pricing';
import Footer from './Footer';
import LoadingScreen from '../Lib/LoadingScreen';

const Main = () => (
  <div>
    <LoadingScreen isLoading={false} />
    <CareeerLogo />
    <Link to="/signIn" className="signInLink">Sign In</Link>
    <Grid id="landingPage">
      <MainHeadline />
      <ReviewSlider />
      <ReviewSliderMobile />
      <Timeline />
      <Pricing />
      <Footer />
    </Grid>
  </div>
);

export default Main;

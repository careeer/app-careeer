import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

import Pricing from './Components/Pricing';
import Timeline from './Components/Timeline';
import MainHeadline from './Components/MainHeadline';
import ReviewSlider from './Components/ReviewSlider';
import ReviewSliderMobile from './Components/ReviewSliderMobile';

const Home = props => (
  <Grid id="landingPage">
    <MainHeadline selectedAccount={props.selectedAccount} />
    <ReviewSlider />
    <ReviewSliderMobile />
    <Timeline />
    <Pricing
      selectedAccount={props.selectedAccount}
      handleSegmentClick={props.handleSegmentClick}
    />
  </Grid>
);

Home.propTypes = {
  selectedAccount: PropTypes.string.isRequired,
  handleSegmentClick: PropTypes.func.isRequired,
};

export default Home;

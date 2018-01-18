import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

import Pricing from './Pricing';
import Timeline from './Timeline';
import MainHeadline from './MainHeadline';
import ReviewSlider from './ReviewSlider';
import ReviewSliderMobile from './ReviewSliderMobile';

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

import React from 'react';
import Reviews from './Reviews';

const ReviewSliderMobile = () => (
  <Reviews
    padding="24px"
    styleName="mobileOnly"
    slidesToShow={1}
  />
);

export default ReviewSliderMobile;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PageHeader = props => (
  <div className="header">
    <div className={props.freeTrial ? 'selected' : ''}>
      <Link to={props.introPath}>Free trial completed</Link>
    </div>

    <div className={props.continueSubscription ? 'selected' : ''}>
      <Link to={props.plansPath}>Continue subscription</Link>
    </div>
    <div className={props.checkout ? 'selected' : ''}>
      <Link to={props.checkoutPath}>Enter payment info</Link>
    </div>
  </div>
);

PageHeader.propTypes = {
  checkout: PropTypes.bool,
  freeTrial: PropTypes.bool,
  continueSubscription: PropTypes.bool,
  introPath: PropTypes.string.isRequired,
  plansPath: PropTypes.string.isRequired,
  checkoutPath: PropTypes.string.isRequired,
};

PageHeader.defaultProps = {
  checkout: false,
  freeTrial: false,
  continueSubscription: false,
};

export default PageHeader;

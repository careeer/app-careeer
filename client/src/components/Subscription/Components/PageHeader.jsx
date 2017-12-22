import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = props => (
  <div className="header">
    <a className={props.freeTrial ? 'selected' : ''}>
      Free trial completed
    </a>

    <a className={props.continueSubscription ? 'selected' : ''}>
      Continue subscription
    </a>
    <a className={props.checkout ? 'selected' : ''}>
      Enter payment info
    </a>
  </div>
);

PageHeader.propTypes = {
  freeTrial: PropTypes.bool,
  checkout: PropTypes.bool,
  continueSubscription: PropTypes.bool,
};

PageHeader.defaultProps = {
  freeTrial: false,
  checkout: false,
  continueSubscription: false,
};

export default PageHeader;

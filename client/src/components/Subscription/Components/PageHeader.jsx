import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = props => (
  <div className="header">
    <div className={props.freeTrial ? 'selected' : ''}>
      Free trial completed
    </div>

    <div className={props.continueSubscription ? 'selected' : ''}>
      Continue subscription
    </div>
    <div className={props.checkout ? 'selected' : ''}>
      Enter payment info
    </div>
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

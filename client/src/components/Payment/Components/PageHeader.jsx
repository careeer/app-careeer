import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = props => (
  <div className="header">
    { props.freeTrial &&
      <a>
        Free trial completed
      </a>
    }
    { props.continueSubscription &&
      <a>
        Continue subscription
      </a>
    }
    { props.paymentInfo &&
      <a>
        Enter payment info
      </a>
    }
  </div>
);

PageHeader.propTypes = {
  freeTrial: PropTypes.bool,
  paymentInfo: PropTypes.bool,
  continueSubscription: PropTypes.bool,
};

PageHeader.defaultProps = {
  freeTrial: false,
  paymentInfo: false,
  continueSubscription: false,
};

export default PageHeader;

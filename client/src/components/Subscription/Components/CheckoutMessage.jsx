import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';

const CheckoutMessage = props => (
  <div className="messageBody">
    <h1 className="introHeader">
      {props.planName}
    </h1>
    <Image
      avatar
      alt="avatar"
      className="avatar"
      src={props.avatarUrl || 'https://res.cloudinary.com/careeer/image/upload/v1504959238/Careeer_logo_a3gu5x.png'}
    />
    <h2 className="introMessage">
      {props.pendingPayment ?
        `$${props.planCost} payment was unsuccessful.` :
        `Your account will be charged $${props.planCost} every month.`
      }
    </h2>
    <h3 className="secondaryMessage">
      {props.pendingPayment ?
        `We were unable to process your payment for your ${props.planName} subscription. Please update your billing information.` :
        'Upgrade, downgrade, or cancel any time'
      }
    </h3>
  </div>
);

CheckoutMessage.propTypes = {
  pendingPayment: PropTypes.bool,
  planName: PropTypes.string.isRequired,
  planCost: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

CheckoutMessage.defaultProps = {
  pendingPayment: false,
};

export default CheckoutMessage;

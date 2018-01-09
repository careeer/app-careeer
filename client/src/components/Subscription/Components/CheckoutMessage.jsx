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
      Your account will be charged ${props.planCost} on the 5th of every month.
    </h2>
    <h3>
      Upgrade, downgrade, or cancel any time
    </h3>
  </div>
);

CheckoutMessage.propTypes = {
  planName: PropTypes.string.isRequired,
  planCost: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

export default CheckoutMessage;

import React from 'react';
import PropTypes from 'prop-types';
import CheckmarkIcon from '../Icons/CheckmarkIcon';

const ThankYouMessage = props => (
  <div>
    <h2 className="thankYouHeader">
      That was fun!
    </h2>
    <p className="thankYouMessage">
      Thanks for letting us get to know
      you better, {props.clientName}.
    </p>
    <CheckmarkIcon className="thankYouCheckmark" />
    <p className="thankYouLoading">
      Building your roadmap...
    </p>
  </div>
);

ThankYouMessage.propTypes = {
  clientName: PropTypes.string.isRequired,
};

export default ThankYouMessage;

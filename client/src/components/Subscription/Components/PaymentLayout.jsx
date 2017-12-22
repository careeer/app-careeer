import React from 'react';
import PropTypes from 'prop-types';

const PaymentLayout = props => (
  <div className="paymentLayout">
    {props.children}
  </div>
);

PaymentLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PaymentLayout;

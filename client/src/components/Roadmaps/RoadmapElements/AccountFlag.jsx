import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/AccountFlag.css';

function AccountFlag(props) {
  return (
    <div className="account">
      <a>
        {props.accountMessage}
      </a>
    </div>
  );
}

AccountFlag.propTypes = {
  accountMessage: PropTypes.string.isRequired,
};

export default AccountFlag;

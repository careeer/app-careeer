import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/AccountFlag.css';

function AccountFlag(props) {
  if (props.accountMessage !== '') {
    return (
      <div className="account">
        <a>
          {props.accountMessage}
        </a>
      </div>
    );
  }
  return null;
}

AccountFlag.propTypes = {
  accountMessage: PropTypes.string.isRequired,
};

export default AccountFlag;

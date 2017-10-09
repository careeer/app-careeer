import React from 'react';
import PropTypes from 'prop-types';

export default function AccountFlag(props) {
  if (props.accountMessage !== '') {
    return (
      <div className="accountType">
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

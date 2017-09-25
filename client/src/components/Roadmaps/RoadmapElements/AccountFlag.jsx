import React from 'react';
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
  accountMessage: React.PropTypes.string.isRequired,
};

export default AccountFlag;

import React from 'react';
import PropTypes from 'prop-types';
import NameInput from './NameInput';

const UserNamePrompt = props => (
  <div>
    <div className="userNameLabel">
      What’s your name?
    </div>
    <NameInput
      placeholder=""
      createClient={props.createClient}
      currentClient={props.currentClient}
      handleClientInputChange={props.handleClientInputChange}
    />
  </div>
);

UserNamePrompt.propTypes = {
  createClient: PropTypes.func.isRequired,
  currentClient: PropTypes.string.isRequired,
  handleClientInputChange: PropTypes.func.isRequired,
};

export default UserNamePrompt;

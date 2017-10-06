import React from 'react';
import PropTypes from 'prop-types';
import NameInput from './NameInput';

const UserNamePrompt = props => (
  <div>
    <div className="userNameLabel">
      {props.questionLabel}
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
  questionLabel: PropTypes.string.isRequired,
  currentClient: PropTypes.string.isRequired,
  handleClientInputChange: PropTypes.func.isRequired,
};

export default UserNamePrompt;

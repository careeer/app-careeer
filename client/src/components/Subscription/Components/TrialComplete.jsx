import React from 'react';
import PropTypes from 'prop-types';

import TrialCompleteMessage from './TrialCompleteMessage';
import TrialCompleteActions from './TrialCompleteActions';

const TrialComplete = props => (
  <div>
    <TrialCompleteMessage
      clientName={props.currentClient}
      avatarUrl={props.currentClientAvatar}
      completeActions={props.completeActions}
    />
    <TrialCompleteActions
      handleContinueClick={props.handleIntroClick}
      handleDeleteAccount={props.handleDeleteAccount}
    />
  </div>
);

TrialComplete.propTypes = {
  currentClient: PropTypes.string.isRequired,
  handleIntroClick: PropTypes.func.isRequired,
  completeActions: PropTypes.number.isRequired,
  handleDeleteAccount: PropTypes.func.isRequired,
  currentClientAvatar: PropTypes.string.isRequired,
};


export default TrialComplete;

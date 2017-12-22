import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';

const TrialCompleteMessage = props => (
  <div className="messageBody">
    <h1 className="introHeader">
      Congratulations {props.clientName}!
    </h1>
    <Image
      avatar
      alt="avatar"
      className="avatar"
      src={props.avatarUrl}
    />
    <h2 className="introMessage">
      You <span>completed {props.completeActions} {props.completeActions > 1 ? 'actions' : 'action'}</span> with your coach during your free trial.
    </h2>
    <p>
      Continue pursuing your goal with Careeer.me
    </p>
  </div>
);

TrialCompleteMessage.propTypes = {
  clientName: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  completeActions: PropTypes.number.isRequired,
};

export default TrialCompleteMessage;

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import PlanSelected from '../../Subscription/Components/PlanSelected';

const SettingsMain = props => (
  <div className="messageBody settings">
    <h2 className="introMessage">
      Your current plan:
    </h2>
    <PlanSelected selectedPlan={props.selectedPlan} />
    <Button
      content="Change subscription"
      className="changeSubscriptionButton"
      onClick={props.onChangeSubscriptionClick}
    />
    <Button
      basic
      content="Change payment info"
      className="changePaymentButton"
      onClick={props.onChangePaymentClick}
    />
    <a
      role="link"
      tabIndex={0}
      className="signOutLink"
      onClick={props.onSignOutClick}
    >
      Sign out
    </a>
    <div className="cancelLinkContainer">
      <a
        role="link"
        tabIndex={0}
        className="cancelLink"
        onClick={props.onCancelAccountClick}
      >
        Cancel subscription
      </a>
    </div>
  </div>
);

SettingsMain.propTypes = {
  selectedPlan: PropTypes.string.isRequired,
  onSignOutClick: PropTypes.func.isRequired,
  onChangePaymentClick: PropTypes.func.isRequired,
  onCancelAccountClick: PropTypes.func.isRequired,
  onChangeSubscriptionClick: PropTypes.func.isRequired,
};

export default SettingsMain;

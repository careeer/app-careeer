import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import Plans from '../../LandingPage/Components/Plans';

const SettingsChangeSubscription = props => (
  <div className="messageBody">
    <h4>
      All plans include
    </h4>
    <p className="plans">
      one dedicated coach <br />
      personalized career roadmap <br />
      unlimited messaging <br />
    </p>
    <Plans
      selectedAccount={props.selectedPlan}
      handleSegmentClick={props.handleSegmentClick}
    />
    <Button
      content="Save changes"
      className="changeSubscriptionButton"
      onClick={props.onSaveChanges}
    />
    <Button
      basic
      content="Go back"
      className="changePaymentButton"
      onClick={props.onGoBackClick}
    />
    <div className="cancelLinkContainer">
      <a
        role="link"
        tabIndex={0}
        className="cancelLink"
        onClick={props.onCancelAccountClick}
      >
        Cancel subscription and delete account
      </a>
    </div>
  </div>
);

SettingsChangeSubscription.propTypes = {
  onGoBackClick: PropTypes.func.isRequired,
  onSaveChanges: PropTypes.func.isRequired,
  selectedPlan: PropTypes.string.isRequired,
  handleSegmentClick: PropTypes.func.isRequired,
  onCancelAccountClick: PropTypes.func.isRequired,
};

export default SettingsChangeSubscription;

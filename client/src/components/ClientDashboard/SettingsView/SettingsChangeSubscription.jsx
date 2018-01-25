import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import Plans from '../../LandingPage/Components/Plans';

const SettingsChangeSubscription = props => (
  <div className="messageBody">
    <div>
      <h4>
        All plans include
      </h4>
      <p className="plans">
        one dedicated coach <br />
        personalized career roadmap <br />
        unlimited messaging <br />
      </p>
    </div>
    <Plans
      selectedAccount={props.selectedPlan}
      handleSegmentClick={props.handleSegmentClick}
    />
    <Button
      content="Save changes"
      onClick={props.onSaveChanges}
      className="changeSubscriptionButton"
    />
    <Button
      basic
      content="Go back"
      onClick={props.onGoBackClick}
      className="changePaymentButton"
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

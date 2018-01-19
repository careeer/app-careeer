import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import Plans from '../../LandingPage/Components/Plans';

const SelectPlanOptions = props => (
  <div className="messageBody">
    <h2 className="plans">
      Select a plan
    </h2>
    <h3>
      Upgrade, downgrade, or cancel any time
    </h3>
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
    <div className="callToAction">
      <Button
        content="Select Plan"
        className="defaultButton"
        onClick={props.handleContinueClick}
      />
    </div>
  </div>
);

SelectPlanOptions.propTypes = {
  selectedPlan: PropTypes.string.isRequired,
  handleSegmentClick: PropTypes.func.isRequired,
  handleContinueClick: PropTypes.func.isRequired,
};

export default SelectPlanOptions;

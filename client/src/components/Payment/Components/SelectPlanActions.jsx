import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const SelectPlanActions = props => (
  <div className="callToAction">
    <Button
      content="Continue"
      className="defaultButton"
      onClick={props.handleContinueClick}
    />
    <a
      role="link"
      tabIndex={0}
      onClick={props.handleToggleShowSelected}
    >
      See other plans
    </a>
  </div>
);

SelectPlanActions.propTypes = {
  handleContinueClick: PropTypes.func.isRequired,
  handleToggleShowSelected: PropTypes.func.isRequired,
};

export default SelectPlanActions;

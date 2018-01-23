import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import PlanSelected from '../../Subscription/Components/PlanSelected';

const SettingsLayout = props => (
  <div className="messageBody">
    <h1 className="introHeader">
      {props.clientName}
    </h1>
    <Image
      avatar
      alt="avatar"
      className="avatar"
      src={props.avatarUrl || 'https://res.cloudinary.com/careeer/image/upload/v1504959238/Careeer_logo_a3gu5x.png'}
    />
    <h2 className="introMessage">
      Selected plan
    </h2>
    <PlanSelected selectedPlan={props.selectedPlan} />
  </div>
);

SettingsLayout.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  clientName: PropTypes.string.isRequired,
  selectedPlan: PropTypes.string.isRequired,
};

export default SettingsLayout;

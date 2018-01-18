import React from 'react';
import PropTypes from 'prop-types';
import { Transition, Dimmer } from 'semantic-ui-react';

const CurtainsDown = props => (
  <Transition
    unmountOnHide
    animation="slide down"
    visible={props.visible}
    onComplete={props.handleAnimationComplete}
    duration={{ hide: 1500, show: 4000 }}
  >
    <Dimmer
      page
      active
      className="paymentComplete"
    />
  </Transition>
);

CurtainsDown.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleAnimationComplete: PropTypes.func.isRequired,
};

export default CurtainsDown;

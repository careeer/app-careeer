import React from 'react';
import PropTypes from 'prop-types';
import SettingsIcon from '../../Icons/SettingsIcon';

const SettingsButton = props => (
  <a
    role="link"
    tabIndex="0"
    className="settingsIcon"
    onClick={props.toggleSettings}
  >
    <SettingsIcon />
  </a>
);

SettingsButton.propTypes = {
  toggleSettings: PropTypes.func.isRequired,
};

export default SettingsButton;

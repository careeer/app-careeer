import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';

const SettingsIcon = props => (
  <Label
    circular
    icon="setting"
    className="settingsIcon"
    onClick={props.toggleSettings}
  />
);

SettingsIcon.propTypes = {
  toggleSettings: PropTypes.func.isRequired,
};

export default SettingsIcon;

import React from 'react';
import PropTypes from 'prop-types';
import ToolboxIcon from '../../Icons/ToolboxIcon';

const ToolboxButton = (props) => {
  if (props.toolboxUrl) {
    return (
      <a
        tabIndex="0"
        target="_blank"
        href={props.toolboxUrl}
      >
        <ToolboxIcon />
      </a>
    );
  }
  return null;
};

ToolboxButton.propTypes = {
  toolboxUrl: PropTypes.string,
};

ToolboxButton.defaultProps = {
  toolboxUrl: '',
};

export default ToolboxButton;

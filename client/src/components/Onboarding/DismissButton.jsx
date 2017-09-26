/* eslint-disable */
import React from 'react';
import { Icon } from 'semantic-ui-react';

function DismissButton(props) {
  return (
    <Icon
      link
      name="remove"
      size="huge"
      onClick={props.onButtonClick}
    />
  );
}

export default DismissButton;

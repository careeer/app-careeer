/* eslint-disable */
import React from 'react';
import CareeerVisionInput from './CareeerVisionInput';

const ClientName = props => (
  <div className="clientNameLabel">
    {props.name}
    <CareeerVisionInput
      vision={props.vision}
      changeVision={props.changeVision}
      handleKeyPress={props.handleKeyPress}
      handleLabelClick={props.handleLabelClick}
      openInputForm={props.openInputForm}
    />
  </div>
);

export default ClientName;

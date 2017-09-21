/* eslint-disable */
import React from 'react';
import CareeerVisionInput from './CareeerVisionInput';

const nameStyle = {
  fontFamily: 'Raleway',
  fontSize: '28px',
  letterSpacing: '3.5px',
  color: '#333',
  paddingTop: '8px',
  width:'auto',
};

const ClientName = props => (
  <div style={nameStyle}>
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

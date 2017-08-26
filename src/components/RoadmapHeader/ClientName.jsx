/* eslint-disable */
import React from 'react';
import CareeerVisionInput from './CareeerVisionInput';

const nameStyle = {
  verticalAlign: 'middle',
  width: '352px',
  height: '33px',
  fontFamily: 'Raleway',
  fontSize: '28px',
  letterSpacing: '3.5px',
  color: '#333',
};

const ClientName = props => (
  <div style={nameStyle}>
    {props.name}
    <CareeerVisionInput
      vision={props.vision}
      changeVision={props.changeVision}
      handleKeyPress={props.handleKeyPress}
    />
  </div>
);

export default ClientName;

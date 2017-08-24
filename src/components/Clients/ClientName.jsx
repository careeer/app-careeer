import React from 'react';

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
  <span style={nameStyle}>
    {props.name}
  </span>
);

export default ClientName;

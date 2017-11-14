import React from 'react';
import './Loading.scss';

const LoadingIcon = () => (
  <div className="loader">
    <div className="loader__bar" />
    <div className="loader__bar" />
    <div className="loader__bar" />
    <div className="loader__bar" />
    <div className="loader__bar" />
    <div className="loader__ball" />
  </div>
);

export default LoadingIcon;

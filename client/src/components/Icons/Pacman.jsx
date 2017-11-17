import React from 'react';
import './Loading.css';

const LoadingIcon = () => (
  <div className="lds-css ng-scope">
    <div className="lds-pacman">
      <div>
        <div />
        <div />
        <div />
      </div>
      <div>
        <div />
        <div />
      </div>
    </div>
  </div>
);

export default LoadingIcon;

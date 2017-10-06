import React, { Component } from 'react';
import ThankYouMessage from './ThankYouMessage';

import './Styles/SimpleOnBoarding.css';

export default class OnBoardingThankYou extends Component {
  componentWillMount() {
    $crisp.push(['do', 'chat:hide']);
  }

  componentWillUnmount() {
    $crisp.push(['do', 'chat:show']);
  }

  render() {
    return (
      <div className="simpleOnBoarding">
        <ThankYouMessage clientName="Fred" />
      </div>
    );
  }
}

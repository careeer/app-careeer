import React, { Component } from 'react';
import IntroOnBoardingMessage from './IntroOnBoardingMessage';

import './Styles/SimpleOnBoarding.css';

export default class OnBoardingIntro extends Component {

  componentWillMount() {
    $crisp.push(['do', 'chat:hide']);
  }

  componentWillUnmount() {
    $crisp.push(['do', 'chat:show']);
  }

  render() {
    return (
      <div className="simpleOnBoarding">
        <IntroOnBoardingMessage />
      </div>
    );
  }
}

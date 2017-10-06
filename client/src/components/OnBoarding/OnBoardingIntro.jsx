import React, { Component } from 'react';
import IntroMessage from './Components/IntroMessage';

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
        <IntroMessage />
      </div>
    );
  }
}

/* eslint-disable */
import React, { Component } from 'react';

import IntroMessage from './Components/IntroMessage';

import './Styles/OnBoarding.scss';

export default class OnBoardingIntro extends Component {
  componentWillMount() {
    $crisp.push(['do', 'chat:hide']);
  }

  componentWillUnmount() {
    $crisp.push(['do', 'chat:show']);
  }

  handleClick = () => {
    this.props.history.push('/freetrial');
  }

  redirectToQuestion = () => {
    this.props.history.push('/OnBoarding/Question_1');
  }

  render() {
    return (
      <div className="introOnboarding">
        <IntroMessage
          handleClick={this.handleClick}
          onStartClick={this.redirectToQuestion}
        />
      </div>
    );
  }
}

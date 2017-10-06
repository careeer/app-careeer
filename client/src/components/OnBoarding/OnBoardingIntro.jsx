/* eslint-disable */
import React, { Component } from 'react';
import IntroMessage from './Components/IntroMessage';
import PageHeader from './Components/PageHeader';

import './Styles/SimpleOnBoarding.css';

export default class OnBoardingIntro extends Component {

  componentWillMount() {
    $crisp.push(['do', 'chat:hide']);
  }

  componentWillUnmount() {
    $crisp.push(['do', 'chat:show']);
  }

  handleClick = () => {
    this.props.history.push('/LongWelcome');
  }

  redirectToQuestion = () => {
    this.props.history.push('/OnBoarding/Question_1');
  }

  render() {
    return (
      <div className="onBoarding">
        <PageHeader
          counterLabel="1/4"
          handleClick={this.handleClick}
          headerLinkLabel="Nevermind, don’t build my roadmap…"
        />
        <IntroMessage onStartClick={this.redirectToQuestion} />
      </div>
    );
  }
}

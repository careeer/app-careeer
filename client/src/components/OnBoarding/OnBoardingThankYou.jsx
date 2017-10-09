/* eslint-disable */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import ThankYouMessage from './Components/ThankYouMessage';

import './Styles/SimpleOnBoarding.css';

@inject('roadmapElements') @observer
export default class OnBoardingThankYou extends Component {
  componentWillMount() {
    $crisp.push(['do', 'chat:hide']);
  }

  componentWillUnmount() {
    $crisp.push(['do', 'chat:show']);
  }



  render() {
    this.checkIfNameIsFilled();
    return (
      <div className="onBoarding">
        <ThankYouMessage clientName={this.props.match.params.clientName} />
      </div>
    );
  }
}

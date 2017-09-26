/* eslint-disable */
import React, { Component } from 'react';
import { Container, Icon } from 'semantic-ui-react';
import Touch from '../Lib/CheckTouch';

export default class DoneButton extends Component {
  state = {
    isMouseInsideCheckmark: false,
  }
  mouseEnterCheckmark = () => {
    this.setState({
      isMouseInsideCheckmark: true,
    });
  };

  mouseExitCheckmark = () => {
    this.setState({
      isMouseInsideCheckmark: false,
    });
  };

  render() {
    let checkmarkIconStyle = {};
    if (this.state.isMouseInsideCheckmark && !Touch.isTouchDevice()) {
      checkmarkIconStyle = {
        color: '#24c63a',
      };
    } else {
      checkmarkIconStyle = {
        color: '#b1b1b1',
      };
    }
    return (

      <Container
        text
        className="welcomeContainer"
      >
        <Icon
          link
          name="checkmark"
          size="big"
          className="welcomeCheckmark"
          style={checkmarkIconStyle}
          onMouseEnter={this.mouseEnterCheckmark}
          onMouseLeave={this.mouseExitCheckmark}
          onClick={this.props.onCheckmarkClick}
        />
        <p className="welcomeDoneButton">
          done
        </p>
      </Container>
    );
  }
}

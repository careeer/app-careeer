/* eslint-disable */
import React, { Component } from 'react';
import { Container, Icon } from 'semantic-ui-react';
import Touch from '../Lib/CheckTouch';

export default class DoneButton extends Component {
  state = {
    isMouseInsideCheckmark: false,
    isDoneClicked: false,
  }

  handleDoneClick = () => {
    this.setState({
      isDoneClicked: true,
    });
    this.props.onCheckmarkClick();
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
    if ((this.state.isMouseInsideCheckmark && !Touch.isTouchDevice()) ||
          this.state.isDoneClicked) {
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
        as="a"
        className="welcomeContainer"
        onClick={this.handleDoneClick}
      >
        <Icon
          size="big"
          name="checkmark"
          className="welcomeCheckmark"
          style={checkmarkIconStyle}
          onMouseLeave={this.mouseExitCheckmark}
          onMouseEnter={this.mouseEnterCheckmark}
        />
        <p className="welcomeDoneButton">
          <span
            onMouseLeave={this.mouseExitCheckmark}
            onMouseEnter={this.mouseEnterCheckmark}
          >
            done
          </span>
        </p>
      </Container>
    );
  }
}

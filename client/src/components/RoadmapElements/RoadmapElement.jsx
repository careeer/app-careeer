/* eslint-disable */
import React from 'react';
import { Segment, Grid, Label, Icon, Button } from 'semantic-ui-react';

import { dueDateStyle, cardTypeStyle, titleStyle, descriptionStyle, iconStyle, gridRowStyle, buttonColumnStyle, rightColumnStyle, buttonStyle, mainGridRowStyle, rightIconsColumnStyle } from '../Constants/RoadmapElementStyles';
import { segmentStyle, COLOR } from '../Constants/CommonElementStyles';
import Touch from '../Helper/CheckTouch';

export default class RoadmapElement extends React.Component {
  state = {
    isMouseInside: false,
    isMouseInsideCheckmark: false,
  }

  handleToggleStatusClick = () => {
    this.props.toggleElementStatus({
      id: this.props.id,
      index: this.props.index,
      color: this.props.color,
      title: this.props.title,
      dueDate: this.props.dueDate,
      cardType: this.props.cardType,
      description: this.props.description,
      callToActionCaption: this.props.callToActionCaption,
      callToActionURL: this.props.callToActionURL,
      status: this.props.isStatusComplete,
    });
  };

  handleButtonClick = () => {
    window.open(`https://${this.props.callToActionURL}`, '_blank', 'height=600','width=400');
  };

  mouseEnter = () => {
    this.setState({
      isMouseInside: true,
    });
  };

  mouseExit = () => {
    this.setState({
      isMouseInside: false,
    });
  };

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
    let writeIconStyle = {};
    if (!this.state.isMouseInside && !Touch.isTouchDevice()) {
      writeIconStyle = {
        color: '#b1b1b1',
        opacity: 0,
      };
    } else {
      writeIconStyle = {
        color: '#b1b1b1',
        opacity: 1,
      };
    }

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

    const isCheckmarkGreen =
      this.props.isStatusComplete ? 'green' : null;

    const isPrimaryButton = (this.props.index === 0 && !this.props.isStatusComplete);

    let segmentColor = null;
    if (this.props.color) {
      segmentColor = COLOR[this.props.color];
    }

    return (
      <Segment
        style={segmentStyle}
        color={segmentColor}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseExit}
      >
        <Grid>
          <Grid.Row columns={2} style={mainGridRowStyle}>
            <Grid.Column
              style={titleStyle}
              width={13}
            >
            <Grid.Row>
              <Grid.Column
                as={Label}
                style={titleStyle}
                content={this.props.title}
              />
            </Grid.Row>
            <Grid.Row>
              <Grid.Column
                as={Label}
                style={descriptionStyle}
                content={this.props.description}
              />
            </Grid.Row>
            <Grid.Row>
              { this.props.callToActionCaption &&
                <Grid.Column
                style={buttonColumnStyle}
                >
                  <Button
                    basic={!isPrimaryButton}
                    color="green"
                    style={buttonStyle}
                    onClick={this.handleButtonClick}
                  >
                    {this.props.callToActionCaption}
                  </Button>
                </Grid.Column>
              }
            </Grid.Row>
          </Grid.Column>
          <Grid.Column
            style={rightColumnStyle}
            width={2}
            floated="right"
          >
            <Grid.Row style={rightIconsColumnStyle}>
            {this.props.isCreateFormClose &&
              <Grid.Column
                as={Label}
                style={iconStyle}
              >
                <Icon
                  link
                  name="write"
                  size="big"
                  style={writeIconStyle}
                  onClick={this.props.onEditClick}
                />
                <Icon
                  link
                  name="checkmark"
                  size="big"
                  style={checkmarkIconStyle}
                  color={isCheckmarkGreen}
                  onMouseEnter={this.mouseEnterCheckmark}
                  onMouseLeave={this.mouseExitCheckmark}
                  onClick={this.handleToggleStatusClick}
                />
              </Grid.Column>
            }
            </Grid.Row>
            <Grid.Row>
            <Grid.Column
              style={rightColumnStyle}
            />
            </Grid.Row>
            <Grid.Row>
              <Grid.Column
                style={rightColumnStyle}
              >
                <Label
                  basic
                  color={segmentColor}
                  style={cardTypeStyle}
                  content={this.props.cardType}
                />
              </Grid.Column>
            <Grid.Column style={rightColumnStyle}>
              <Label
                style={dueDateStyle}
                content={this.props.dueDate}
              />
            </Grid.Column>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

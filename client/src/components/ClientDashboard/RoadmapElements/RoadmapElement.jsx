/* eslint-disable */
import React from 'react';
import { Segment, Grid, Label, Icon, Button } from 'semantic-ui-react';

import Touch from '../../Lib/CheckTouch';

const COLOR = {
  '#6435c9': 'violet',
  '#e03997': 'pink',
  '#00b5ad': 'teal',
  '#fbbd08': 'yellow',
  transparent: null,
};

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
    window.open(`https://${this.props.callToActionURL}`, '_blank', 'height=600', 'width=400');
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
        marginRight: '15px',
      };
    } else {
      writeIconStyle = {
        color: '#b1b1b1',
        opacity: 1,
        marginRight: '15px',
      };
    }

    let checkmarkIconStyle = {};
    if (this.state.isMouseInsideCheckmark && !Touch.isTouchDevice()) {
      checkmarkIconStyle = {
        boxShadow: '1px 3px 2px 0 rgba(0, 0, 0, 0.5)',
        backgroundColor: '#55dae0',
      };
    } else {
      checkmarkIconStyle = {
        boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.5)',
      };
    }

    const isPrimaryButton = (this.props.index === 0 && !this.props.isStatusComplete);

    let segmentColor = null;
    if (this.props.color) {
      segmentColor = COLOR[this.props.color];
    }

    return (
      <Segment
        color={segmentColor}
        className="roadmapSegment"
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseExit}
      >
        <Grid>
          <Grid.Row
            stretched
            verticalAlign="middle"
            className="roadmapFirstRow"
          >
            <Grid.Column
              floated="left"
              className="roadmapLeftColumn"
            >
              <Grid.Row>
                <Grid.Column
                  as={Label}
                  className="roadmapTitleColumn"
                  content={this.props.title}
                />
              </Grid.Row>
            </Grid.Column>
            <Grid.Column
              floated="right"
              className="roadmapRightColumn"
            >
              <Grid.Row className="roadmapIconsRow">
                {this.props.isCreateFormClose &&
                  <Grid.Column
                    as={Label}
                    className="roadmapIconsLabelColumn"
                  >
                    <Icon
                      link
                      name="write"
                      size="big"
                      style={writeIconStyle}
                      onClick={this.props.onEditClick}
                    />
                    <Button
                      icon
                      labelPosition='left'
                      style={checkmarkIconStyle}
                      active={this.props.isStatusComplete}
                      onClick={this.handleToggleStatusClick}
                      onMouseEnter={this.mouseEnterCheckmark}
                      onMouseLeave={this.mouseExitCheckmark}
                    >
                      <Icon
                        name="checkmark"
                      />
                      done
                    </Button>
                  </Grid.Column>
                }
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid
          stackable
        >
          <Grid.Row
            stretched
          >
            <Grid.Column
              floated="left"
              className="roadmapLeftColumn"
            >
              <Grid.Row>
                <Grid.Column
                  as={Label}
                  className="roadmapDescription"
                  content={this.props.description}
                />
              </Grid.Row>
              <Grid.Row>
                { this.props.callToActionCaption &&
                  <Grid.Column className="roadmapButtonColumn">
                    <Button
                      color="green"
                      basic={!isPrimaryButton}
                      className="roadmapButton"
                      onClick={this.handleButtonClick}
                    >
                      {this.props.callToActionCaption}
                    </Button>
                  </Grid.Column>
                }
              </Grid.Row>
            </Grid.Column>
            <Grid.Column
              floated="right"
              className="roadmapRightColumnNotMobile"
            >
              <Grid.Row className="roadmapBottomRightRow">
                <Grid.Column className="roadmapBottomRightColumn">
                  <Label
                    basic
                    color={segmentColor}
                    className="roadmapCardType"
                    content={this.props.cardType}
                  />
                </Grid.Column>
                <Grid.Column className="roadmapRightColumn">
                  <Label
                    className="roadmapDueDate"
                    content={this.props.dueDate}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid className="mobileOnlyGrid">
        <Grid.Row
          stretched
          verticalAlign="middle"
          className="roadmapFirstRow"
        >
          <Grid.Column
            floated="left"
            className="mobileOnlyLeftColumn"
          >
            <Grid.Row>
              <Grid.Column
                className="roadmapTitleColumn"
              >
              <Label
                basic
                color={segmentColor}
                className="roadmapCardType"
                content={this.props.cardType}
              />
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column
            floated="right"
            className="mobileOnlyRightColumn"
          >
            <Grid.Row>
                <Grid.Column
                  className="roadmapIconsLabelColumn"
                >
                <Label
                  className="roadmapDueDate"
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

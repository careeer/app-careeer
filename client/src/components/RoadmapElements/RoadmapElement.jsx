/* eslint-disable */
import React from 'react';
import { Segment, Grid, Label, Icon, Button } from 'semantic-ui-react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import ItemTypes from '../Constants/ItemTypes';
import { dueDateStyle, cardTypeStyle, titleStyle, descriptionStyle, iconStyle, gridRowStyle, buttonStyle, buttonColumnStyle } from '../Constants/RoadmapElementStyles';
import { segmentStyle, COLOR } from '../Constants/CommonElementStyles';

const roadmapElementSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
    };
  },
};

const roadmapElementTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.handleElementMove(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  },
};

@DropTarget(ItemTypes.ROADMAP_ELEMENT, roadmapElementTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))
@DragSource(ItemTypes.ROADMAP_ELEMENT, roadmapElementSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
}))
export default class RoadmapElement extends React.Component {
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

  render() {
    const isCheckmarkGreen =
      this.props.isStatusComplete ? 'green' : null
    const primaryButton = (this.props.index === 0 && !this.props.isStatusComplete) ? false : true
    const { connectDragSource } = this.props;
    const { connectDropTarget } = this.props;

    let segmentColor = null;
    if (this.props.color) {
      segmentColor = COLOR[this.props.color];
    }

    return connectDragSource(connectDropTarget(
      <div>
        <Segment
          style={segmentStyle}
          color={segmentColor}
        >
          <Grid>
            <Grid.Row style={gridRowStyle}>
              <Grid.Column
                floated="left"
                as={Label}
                style={cardTypeStyle}
                content={this.props.cardType}
              />
              {this.props.isCreateFormClose &&
                <Grid.Column
                  floated="right"
                  as={Label}
                  style={iconStyle}
                >
                  <Icon
                    link
                    name="write"
                    size="big"
                    onClick={this.props.onEditClick}
                  />
                  <Icon
                    link
                    name="checkmark"
                    size="big"
                    color={isCheckmarkGreen}
                    onClick={this.handleToggleStatusClick}
                  />
                </Grid.Column>
              }
            </Grid.Row>
            <Grid.Row style={gridRowStyle}>
              <Grid.Column
                floated='left'
                as={Label}
                style={titleStyle}
                content={this.props.title}
              />
            </Grid.Row>
            <Grid.Row style={gridRowStyle}>
              <Grid.Column
                floated='left'
                as={Label}
                style={descriptionStyle}
                content={this.props.description}
              />
            </Grid.Row>
            <Grid.Row style={gridRowStyle}>
              {this.props.callToActionCaption &&
                <Grid.Column
                  floated='left'
                  style={buttonColumnStyle}
                >
                    <Button
                      basic={primaryButton}
                      color="green"
                      floated="left"
                      onClick={this.handleButtonClick}
                    >
                      {this.props.callToActionCaption}
                    </Button>
                </Grid.Column>
              }
              <Grid.Column
                floated="right"
                as={Label}
                style={dueDateStyle}
                content={this.props.dueDate}
              />
            </Grid.Row>
          </Grid>
        </Segment>
      </div>,
    ));
  }
}

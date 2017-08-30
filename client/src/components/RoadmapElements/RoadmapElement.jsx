/* eslint-disable */
import React from 'react';
import { Segment } from 'semantic-ui-react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import ItemTypes from '../Constants/ItemTypes';

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

  render() {
    const isCheckmarkGreen =
      this.props.isStatusComplete ? 'green' : ''
    const primaryButton = (this.props.index === 0) ? '' : 'basic'
    const { connectDragSource } = this.props;
    const { connectDropTarget } = this.props;

    const COLOR = {
      '#6435c9': 'violet',
      '#e03997': 'pink',
      '#00b5ad': 'teal',
      '#fbbd08': 'yellow',
      transparent: null,
    };
    let segmentColor = null;
    if (this.props.color) {
      segmentColor = COLOR[this.props.color];
    }

    return connectDragSource(connectDropTarget(
      <div>
        <Segment color={segmentColor}>
          {this.props.isCreateFormClose &&
            <div className="ui basic top right attached label">
              <a onClick={this.props.onEditClick}>
                <i className="big write icon" />
              </a>
              <a onClick={this.handleToggleStatusClick}>
                <i className={`big checkmark ${isCheckmarkGreen} icon`} />
              </a>
            </div>
          }
          <div className="ui basic bottom right attached label">
            <div className="sub header">{this.props.dueDate}</div>
          </div>
          <div className="content">

            <div className="sub header">{this.props.cardType}</div>
            <h2 className="ui large header">
              {this.props.title}
            </h2>
            <div className="description">
              {this.props.description}
            </div>
            {this.props.callToActionCaption &&
              <a
                href={`https://${this.props.callToActionURL}`}
                target="_blank"
              >
                <div className={`ui left bottom green ${primaryButton} button`}>
                  {this.props.callToActionCaption}
                </div>
              </a>
            }
          </div>
        </Segment>
      </div>,
    ));
  }
}

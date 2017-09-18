/* eslint-disable */
import React from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import ItemTypes from '../Constants/ItemTypes';
import RoadmapElement from './RoadmapElement';

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
export default class DraggableRoadmapElement extends React.Component {

  render() {
    const { connectDragSource } = this.props;
    const { connectDropTarget } = this.props;

    if (this.props.enableDragAndDrop) {
      return connectDragSource(connectDropTarget(
        <div>
          <RoadmapElement
            id={this.props.id}
            index={this.props.index}
            color={this.props.color}
            dueDate={this.props.dueDate}
            cardType={this.props.cardType}
            title={this.props.title}
            description={this.props.description}
            callToActionCaption={this.props.callToActionCaption}
            callToActionURL={this.props.callToActionURL}
            isStatusComplete={this.props.isStatusComplete}
            isCreateFormClose={this.props.isCreateFormClose}
            onEditClick={this.handleEditClick}
            toggleElementStatus={this.props.toggleElementStatus}
            handleElementMove={this.props.handleElementMove}
            enableDragAndDrop={this.props.enableDragAndDrop}
          />
        </div>
      ));
    }
    return (
      <div>
        <RoadmapElement
          id={this.props.id}
          index={this.props.index}
          color={this.props.color}
          dueDate={this.props.dueDate}
          cardType={this.props.cardType}
          title={this.props.title}
          description={this.props.description}
          callToActionCaption={this.props.callToActionCaption}
          callToActionURL={this.props.callToActionURL}
          isStatusComplete={this.props.isStatusComplete}
          isCreateFormClose={this.props.isCreateFormClose}
          onEditClick={this.handleEditClick}
          toggleElementStatus={this.props.toggleElementStatus}
          handleElementMove={this.props.handleElementMove}
          enableDragAndDrop={this.props.enableDragAndDrop}
        />
      </div>
    );
  }
}

/* eslint-disable */
import React from 'react';

import RoadmapElementForm from './RoadmapElementForm';
import DraggableRoadmapElement from './DraggableRoadmapElement';

export default class EditableRoadmapElement extends React.Component {
  state = {
    editFormOpen: false,
  };

  handleEditClick = () => {
    this.toggleFormAccessibility();
    this.openForm();
  };

  handleFormClose = () => {
    this.toggleFormAccessibility();
    this.closeForm();
  };

  handleCopy = (element) => {
    this.props.onFormCopy(element);
  }

  handleSubmit = (element) => {
    this.toggleFormAccessibility();
    this.props.onFormSubmit(element);
    this.closeForm();
  };

  handleFormDelete = (elementId) => {
    this.toggleFormAccessibility();
    this.props.onDeleteClick(elementId);
  };

  toggleFormAccessibility = () => {
    this.props.onFormOpen();
    this.props.handleCreateFormToggle();
  };

  closeForm = () => {
    this.setState({ editFormOpen: false });
  };

  openForm = () => {
    this.setState({ editFormOpen: true });
  };

  render() {
    if (this.state.editFormOpen) {
      return (
        <RoadmapElementForm
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
          onFormSubmit={this.handleSubmit}
          onFormCopy={this.handleCopy}
          onFormClose={this.handleFormClose}
          onDeleteClick={this.handleFormDelete}
        />
      );
    }
    return (
      <DraggableRoadmapElement
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
    );
  }
}

import React from "react";

import RoadmapElementForm from './RoadmapElementForm'
import RoadmapElement from './RoadmapElement'

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
          dueDate={this.props.dueDate}
					cardType={this.props.cardType}
					title={this.props.title}
					description={this.props.description}
					callToActionCaption={this.props.callToActionCaption}
					callToActionURL={this.props.callToActionURL}
					onFormSubmit={this.handleSubmit}
					onFormClose={this.handleFormClose}
					onDeleteClick={this.handleFormDelete}
				/>
      );
    } else {
      return (
        <RoadmapElement
          id={this.props.id}
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
        />
      );
    }
  }
}

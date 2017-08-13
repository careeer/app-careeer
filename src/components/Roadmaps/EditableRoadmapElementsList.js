import React from "react";

import EditableRoadmapElement from './EditableRoadmapElement'

export default class EditableRoadmapElementList extends React.Component {
  render() {
    const roadmapElements = this.props.roadmapElements.map((roadmapElement) => (
      <EditableRoadmapElement
        key={roadmapElement.id}
        id={roadmapElement.id}
        dueDate={roadmapElement.due_date}
        cardType={roadmapElement.card_type}
        title={roadmapElement.title}
        description={roadmapElement.description}
        callToActionCaption={roadmapElement.call_to_action}
        callToActionURL={roadmapElement.call_to_action_url}
        isStatusComplete={roadmapElement.status}
        onFormOpen={this.props.onFormOpen}
        onFormSubmit={this.props.onFormSubmit}
        onDeleteClick={this.props.onDeleteClick}
        isCreateFormClose={this.props.isCreateFormClose}
        handleCreateFormToggle={this.props.handleCreateFormToggle}
        toggleElementStatus={this.props.toggleElementStatus}
      />
    ));

    return (
      <div id='roadmapElements'>
        {roadmapElements}
      </div>
    );
  }
}

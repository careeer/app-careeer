import React from "react";

import EditableRoadmapElement from './EditableRoadmapElement'

export default class EditableRoadmapElementList extends React.Component {
  render() {
    const roadmapElements = this.props.roadmapElements.map((roadmapElement) => (
      <EditableRoadmapElement
        key={roadmapElement.id}
        id={roadmapElement.id}
        cardType={roadmapElement.cardType}
        title={roadmapElement.title}
        description={roadmapElement.description}
        callToActionCaption={roadmapElement.callToActionCaption}
        callToActionURL={roadmapElement.callToActionURL}
        isStatusComplete={roadmapElement.isStatusComplete}
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
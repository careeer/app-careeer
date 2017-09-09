/* eslint-disable */
import React from 'react';
import EditableRoadmapElement from './EditableRoadmapElement';

const EditableRoadmapElementList = (props) => {
  const { roadmapElements } = props;
  const elements = roadmapElements.map(
    roadmapElement =>
      (<EditableRoadmapElement
        key={roadmapElement.id}
        index={roadmapElement.dnd_index}
        color={roadmapElement.color}
        id={roadmapElement.id}
        dueDate={roadmapElement.due_date}
        cardType={roadmapElement.card_type}
        title={roadmapElement.title}
        description={roadmapElement.description}
        callToActionCaption={roadmapElement.call_to_action}
        callToActionURL={roadmapElement.call_to_action_url}
        isStatusComplete={roadmapElement.status}

        onFormOpen={props.onFormOpen}
        onFormSubmit={props.onFormSubmit}
        onFormCopy={props.onFormCopy}
        onDeleteClick={props.onDeleteClick}

        isCreateFormClose={props.isCreateFormClose}
        handleCreateFormToggle={props.handleCreateFormToggle}
        toggleElementStatus={props.toggleElementStatus}
        handleElementMove={props.handleElementMove}
      />)
  );
  return (
    <div>
      {elements}
    </div>
  );
};

export default EditableRoadmapElementList;

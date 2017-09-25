import React from 'react';
import PropTypes from 'prop-types';
import EditableRoadmapElementsList from './EditableRoadmapElementsList';
import CompletedElementsDivider from './CompletedElementsDivider';

function CompletedRoadmapElementsList(props) {
  if (props.completedElements.length > 0) {
    return (
      <div>
        <CompletedElementsDivider
          message={props.completedAccordionMessage}
          icon={props.completedAccordionIcon}
          toggleCompletedElements={props.toggleCompletedElements}
        />
        {props.isCompletedAccordionOpen &&
          <EditableRoadmapElementsList
            roadmapElements={props.completedElements}
            isCreateFormClose={props.isCreateFormClose}
            onFormOpen={props.onFormOpen}
            onFormSubmit={props.onFormSubmit}
            onFormCopy={props.onFormCopy}
            onDeleteClick={props.onDeleteClick}
            toggleElementStatus={props.toggleElementStatus}
            handleCreateFormToggle={props.handleCreateFormToggle}
            handleElementMove={props.handleElementMove}
            enableDragAndDrop={props.enableDragAndDrop}
          />
        }
      </div>
    );
  }
  return null;
}

CompletedRoadmapElementsList.propTypes = {
  completedAccordionMessage: PropTypes.string.isRequired,
  completedAccordionIcon: PropTypes.string.isRequired,
  toggleCompletedElements: PropTypes.func.isRequired,
  isCompletedAccordionOpen: PropTypes.bool.isRequired,
  isCreateFormClose: PropTypes.bool.isRequired,
  onFormOpen: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onFormCopy: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  toggleElementStatus: PropTypes.func.isRequired,
  handleCreateFormToggle: PropTypes.func.isRequired,
  handleElementMove: PropTypes.func.isRequired,
  enableDragAndDrop: PropTypes.bool.isRequired,
  completedElements: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    index: PropTypes.number,
    color: PropTypes.string,
    due_date: PropTypes.string,
    card_type: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    call_to_action: PropTypes.string,
    call_to_action_url: PropTypes.string,
    status: PropTypes.bool,
  })).isRequired,
};

export default CompletedRoadmapElementsList;

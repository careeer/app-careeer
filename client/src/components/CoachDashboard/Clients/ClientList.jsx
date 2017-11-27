/* eslint-disable */
import React from 'react';
import ClientElement from './ClientElement';

const ClientList = (props) => {
  const { currentClients } = props;
  const clients = currentClients.map(
    currentClient => (
      <ClientElement
        key={currentClient.id}
        clientIndex={currentClient.id}
        clientSlug={currentClient.slug}
        clientName={currentClient.name}
        clientVision={currentClient.vision}
        completedStats={currentClient.complete}
        incompleteStats={currentClient.incomplete}
        toolboxUrl={currentClient.toolbox}
        onClientNameClick={props.handleExistingClientClick}
        onArchiveClick={props.handleArchiveClick}
        onToolboxUpload={props.handleToolboxUpload}
        onDuplicateClick={props.handleDuplicateClick}
      />
    ),
  );
  return (
    <div>
      {clients}
    </div>
  );
};

export default ClientList;

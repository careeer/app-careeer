/* eslint-disable */
import React from 'react';
import ClientElement from './ClientElement';

const ClientList = (props) => {
  const { currentClients } = props;
  const clients = currentClients.map(
    currentClient => (
      <ClientElement
        key={currentClient.id}
        onClientNameClick={props.handleExistingClientClick}
        onArchiveClick={props.handleArchiveClick}
        onDuplicateClick={props.handleDuplicateClick}
        clientSlug={currentClient.slug}
        clientName={currentClient.name}
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

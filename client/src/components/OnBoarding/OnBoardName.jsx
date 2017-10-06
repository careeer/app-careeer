import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import TeamIcon from './TeamIcon';
import UserNamePrompt from './UserNamePrompt';

const OnBoardName = props => (
  <Grid textAlign="center">
    <Grid.Column>
      <TeamIcon />
      <UserNamePrompt
        questionLabel="What’s your name?"
        createClient={props.createClient}
        currentClient={props.currentClient || ''}
        handleClientInputChange={props.handleClientInputChange}
      />
    </Grid.Column>
  </Grid>
);

OnBoardName.propTypes = {
  createClient: PropTypes.func.isRequired,
  currentClient: PropTypes.string.isRequired,
  handleClientInputChange: PropTypes.func.isRequired,
};

export default OnBoardName;

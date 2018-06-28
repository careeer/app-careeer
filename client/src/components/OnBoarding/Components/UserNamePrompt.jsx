import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import NameInput from './NameInput';

import TeamIcon from '../../Icons/TeamIcon';
import PageHeader from './PageHeader';

const UserNamePrompt = props => (
  <Grid
    textAlign="center"
    className="questionGrid"
  >
    <div className="row pageHeader">
      <PageHeader
        counterLabel="4/4"
        handleClick={props.handleClick}
        headerLinkLabel="Build your roadmap"
      />
    </div>
    <Grid.Column className="onBoardingColumn">
      <TeamIcon />
      <div className="userNameLabel">
        What’s your name?
      </div>
      <NameInput
        placeholder=""
        nameError={props.nameError}
        createClient={props.createClient}
        currentClient={props.currentClient}
        handleClientInputChange={props.handleClientInputChange}
      />
    </Grid.Column>
  </Grid>
);

UserNamePrompt.propTypes = {
  nameError: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  createClient: PropTypes.func.isRequired,
  currentClient: PropTypes.string.isRequired,
  handleClientInputChange: PropTypes.func.isRequired,
};

export default UserNamePrompt;

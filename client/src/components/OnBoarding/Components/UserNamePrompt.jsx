import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import NameInput from './NameInput';

import TeamIcon from '../../Icons/TeamIcon';
import PageHeader from './PageHeader';

const UserNamePrompt = props => (
  <Grid textAlign="center" className="questionGrid">
    <div className="row pageHeader">
      <PageHeader counterLabel="5/5" handleClick={props.handleClick} icon={false} />
    </div>
    <Grid.Column className="onBoardingColumn">
      <TeamIcon />
      <div className="userNameLabel">What’s your name?</div>
      <NameInput
        placeholder=""
        nameError={props.nameError}
        createClient={props.createClient}
        currentClient={props.currentClient}
        handleClientInputChange={props.handleClientInputChange}
      />
      <button className="scheduleCall">
        <a href="https://app.acuityscheduling.com/schedule.php?owner=13659144&appointmentType=3401046">
          Complete {<br />}and chat with a coach
        </a>
      </button>
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

/* eslint-disable */
import React, { Component } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import TeamIcon from './Icons/TeamIcon';
import PageHeader from './Components/PageHeader';

export default class OnBoardingQuestion extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.history.push('/OnBoarding/Question_2');
  }
  handleClick = () => {
    this.props.history.push('/OnBoarding/Question_2');
  }

  render() {
    const { activeItem } = this.state;
    const Items = [
      { key: 'Exploring', name: 'Exploring', onClick: this.handleItemClick, active: activeItem === 'Exploring' },
      { key: 'Interviewing', name: 'Interviewing', onClick: this.handleItemClick, active: activeItem === 'Interviewing' },
      { key: 'Gaining new skills', name: 'Gaining new skills', onClick: this.handleItemClick, active: activeItem === 'Gaining new skills' },
    ]
    return (
      <div className="onBoarding">
      <PageHeader
        counterLabel="2/4"
        handleClick={this.handleClick}
        headerLinkLabel="Skip question"
      />
      <Grid textAlign="center" className="questionGrid">
        <Grid.Row className="questionGrid">
          <Grid.Column>
            <TeamIcon />
            <div className="userNameLabel">
              Where are you in your career path?
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="questionGrid">
          <Grid.Column >
            <Menu secondary vertical items={Items} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    );
  }
}

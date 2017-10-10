/* eslint-disable */
import React, { Component } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import TeamIcon from '../Icons/TeamIcon';
import PageHeader from './Components/PageHeader';

export default class OnBoardingQuestion extends Component {
  state = { activeItem: localStorage.getItem("Answer2") }

  componentWillMount() {
    $crisp.push(['do', 'chat:hide']);
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    localStorage.setItem("Answer2", name);
    $crisp.push(["set", 'session:data', [[["Question2", "Which personality type do you identify with most?"], ["Answer2", name]]]]);
    this.props.history.push('/OnBoarding/Question_3');
  }
  handleClick = () => {
    this.props.history.push('/OnBoarding/Question_3');
  }

  render() {
    const { activeItem } = this.state;
    const Items = [
      { key: 'Introvert', name: 'Introvert', onClick: this.handleItemClick, active: activeItem === 'Introvert' },
      { key: 'Extrovert', name: 'Extrovert', onClick: this.handleItemClick, active: activeItem === 'Extrovert' },
    ]
    return (
      <div className="onBoarding">
        <PageHeader
          counterLabel="3/4"
          handleClick={this.handleClick}
          headerLinkLabel="Skip question"
        />
        <Grid
          textAlign="center"
          className="questionGrid"
        >
          <Grid.Row className="questionGrid">
            <Grid.Column className="onBoardingColumn">
              <TeamIcon />
              <div className="userNameLabel">
                Which personality type do you identify with most?
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="questionGrid">
            <Grid.Column verticalAlign="bottom" className="onBoardingColumn">
              <Menu secondary vertical items={Items} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
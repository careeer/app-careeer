/* eslint-disable */
import React, { Component } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import TeamIcon from '../Icons/TeamIcon';
import PageHeader from './Components/PageHeader';
import Touch from '../Lib/CheckTouch';

export default class OnBoardingQuestion extends Component {
  state = {
    activeItem: localStorage.getItem("Answer3"),
  }

  componentWillMount() {
    $crisp.push(['do', 'chat:hide']);
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    localStorage.setItem("Answer3", name);
    $crisp.push(["set", 'session:data', [[["Question3", "Which best describes you?"], ["Answer3", name]]]]);
    this.props.history.push('/OnBoarding/Name');
  }

  handleClick = () => {
    this.props.history.push('/OnBoarding/Name');
  }

  render() {
    const { activeItem } = this.state;
    const Items = [
      { key: 'Engineer', name: 'Engineer', onClick: this.handleItemClick, active: activeItem === 'Engineer' },
      { key: 'Designer', name: 'Designer', onClick: this.handleItemClick, active: activeItem === 'Designer' },
      { key: 'Product manager', name: 'Product manager', onClick: this.handleItemClick, active: activeItem === 'Product manager' },
      { key: 'Gaining new skills', name: 'Gaining new skills', onClick: this.handleItemClick, active: activeItem === 'Gaining new skills' },
    ]

    return (
      <div className="onBoarding">
      <PageHeader
        counterLabel="4/4"
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
              Which best describes you?
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="questionGrid">
          <Grid.Column
            verticalAlign="bottom"
            className="onBoardingColumn"
          >
            <Menu
              vertical
              secondary
              items={Items}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    );
  }
}

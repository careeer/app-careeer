/* eslint-disable */
import React, { Component } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import TeamIcon from '../Icons/TeamIcon';
import PageHeader from './Components/PageHeader';
import Touch from '../Lib/CheckTouch';

export default class OnBoardingQuestion extends Component {
  state = {
    activeItem: localStorage.getItem("Answer1"),
  }

  componentWillMount() {
    $crisp.push(['do', 'chat:hide']);
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    localStorage.setItem("Answer1", name);
    $crisp.push(["set", 'session:data', [[["Question1", "Which area would you like to improve most?"], ["Answer1", name]]]]);
    this.props.history.push('/OnBoarding/Question_2');
  }

  handleClick = () => {
    this.props.history.push('/OnBoarding/Question_2');
  }

  render() {
    const { activeItem } = this.state;

    let itemClass="noHoverItem";
    if (!Touch.isTouchDevice()) {
      itemClass="hoverItem";
    }

    const Items = [
      {
        key: 'Skill development',
        name: 'Skill development',
        onClick: this.handleItemClick,
        active: activeItem === 'Skill development',
        className: itemClass
      },
      {
        key: 'Professional branding',
        name: 'Professional branding',
        onClick: this.handleItemClick,
        active: activeItem === 'Professional branding',
        className: itemClass
      },
      {
        key: 'Job search strategy',
        name: 'Job search strategy',
        onClick: this.handleItemClick,
        active: activeItem === 'Job search strategy',
        className: itemClass
      },
      {
        key: 'Interview prep',
        name: 'Interview prep',
        onClick: this.handleItemClick,
        active: activeItem === 'Interview prep',
        className: itemClass
      },
    ]

    return (
      <div className="onBoarding">
        <PageHeader
          counterLabel="2/5"
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
                Which area would you like to improve most?
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

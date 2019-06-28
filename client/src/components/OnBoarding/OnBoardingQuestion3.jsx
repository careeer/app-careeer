/* eslint-disable */
import React, { Component } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import TeamIcon from '../Icons/TeamIcon';
import PageHeader from './Components/PageHeader';
import Touch from '../Lib/CheckTouch';

export default class OnBoardingQuestion extends Component {
  state = {
    activeItem: localStorage.getItem('Answer3'),
  };

  componentWillMount() {
    $crisp.push(['do', 'chat:hide']);
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    localStorage.setItem('Answer3', name);
    $crisp.push([
      'set',
      'session:data',
      [[['Question3', 'What is your timeline for landing in your next role?'], ['Answer3', name]]],
    ]);
    this.props.history.push('/OnBoarding/Name');
  };

  handleClick = () => {
    this.props.history.push('/OnBoarding/Name');
  };

  render() {
    const { activeItem } = this.state;

    let itemClass = 'noHoverItem';
    if (!Touch.isTouchDevice()) {
      itemClass = 'hoverItem';
    }

    const Items = [
      {
        key: '1 to 2 months',
        name: '1 to 2 months',
        onClick: this.handleItemClick,
        active: activeItem === '1 to 2 months',
        className: itemClass,
      },
      {
        key: '3 to 5 months',
        name: '3 to 5 months',
        onClick: this.handleItemClick,
        active: activeItem === '3 to 5 months',
        className: itemClass,
      },
      {
        key: '6 months or more',
        name: '6 months or more',
        onClick: this.handleItemClick,
        active: activeItem === '6 months or more',
        className: itemClass,
      },
    ];

    return (
      <div className="onBoarding">
        <Grid textAlign="center" className="questionGrid">
          <Grid.Row className="pageHeader">
            <PageHeader
              counterLabel="4/5"
              handleClick={this.handleClick}
              headerLinkLabel="Skip question"
            />
          </Grid.Row>
          <Grid.Row className="questionGrid">
            <Grid.Column className="onBoardingColumn">
              <TeamIcon />
              <div className="userNameLabel">
                What is your timeline for landing in your next role?
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="questionGridOptions">
            <Grid.Column className="onBoardingColumn">
              <Menu vertical secondary items={Items} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

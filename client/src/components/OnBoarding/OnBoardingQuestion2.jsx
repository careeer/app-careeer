/* eslint-disable */
import React, { Component } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import TeamIcon from '../Icons/TeamIcon';
import PageHeader from './Components/PageHeader';
import Touch from '../Lib/CheckTouch';

export default class OnBoardingQuestion extends Component {
  state = {
    activeItem: localStorage.getItem('Answer2'),
  };

  componentWillMount() {
    $crisp.push(['do', 'chat:hide']);
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    localStorage.setItem('Answer2', name);
    $crisp.push([
      'set',
      'session:data',
      [[['Question2', 'What is your Ideal next role?'], ['Answer2', name]]],
    ]);
    this.props.history.push('/OnBoarding/Question_3');
  };

  handleClick = () => {
    this.props.history.push('/OnBoarding/Question_3');
  };

  render() {
    const { activeItem } = this.state;

    let itemClass = 'noHoverItem';
    if (!Touch.isTouchDevice()) {
      itemClass = 'hoverItem';
    }

    const Items = [
      {
        key: 'Product',
        name: 'Product',
        onClick: this.handleItemClick,
        active: activeItem === 'Product',
        className: itemClass,
      },
      {
        key: 'UX',
        name: 'UX',
        onClick: this.handleItemClick,
        active: activeItem === 'UX',
        className: itemClass,
      },
      {
        key: 'Sales',
        name: 'Sales',
        onClick: this.handleItemClick,
        active: activeItem === 'Sales',
        className: itemClass,
      },
      {
        key: 'Software engineer',
        name: 'Software engineer',
        onClick: this.handleItemClick,
        active: activeItem === 'Software engineer',
        className: itemClass,
      },
    ];

    return (
      <div className="onBoarding">
        <Grid textAlign="center" className="questionGrid">
          <Grid.Row className="pageHeader">
            <PageHeader
              counterLabel="3/5"
              handleClick={this.handleClick}
              headerLinkLabel="Skip question"
            />
          </Grid.Row>
          <Grid.Row className="questionGrid">
            <Grid.Column className="onBoardingColumn">
              <TeamIcon />
              <div className="userNameLabel">What is your Ideal next role?</div>
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

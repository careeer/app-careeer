/* eslint-disable */
import React, { Component } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import TeamIcon from '../Icons/TeamIcon';
import PageHeader from './Components/PageHeader';
import Touch from '../Lib/CheckTouch';

export default class OnBoardingQuestion extends Component {
  state = {
    activeItem: localStorage.getItem("Answer4"),
  }

  componentWillMount() {
    $crisp.push(['do', 'chat:hide']);
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    localStorage.setItem("Answer4", name);
    $crisp.push(["set", 'session:data', [[["Question4", "Which best describes you?"], ["Answer4", name]]]]);
    this.props.history.push('/OnBoarding/Name');
  }

  handleClick = () => {
    this.props.history.push('/OnBoarding/Name');
  }

  render() {
    const { activeItem } = this.state;

    let itemClass="noHoverItem";
    if (!Touch.isTouchDevice()) {
      itemClass="hoverItem";
    }

    const Items = [
      { key: 'Engineer', name: 'Engineer', onClick: this.handleItemClick, active: activeItem === 'Engineer', className: itemClass },
      { key: 'Designer', name: 'Designer', onClick: this.handleItemClick, active: activeItem === 'Designer', className: itemClass },
      { key: 'Product manager', name: 'Product manager', onClick: this.handleItemClick, active: activeItem === 'Product manager', className: itemClass },
      { key: 'Gaining new skills', name: 'Gaining new skills', onClick: this.handleItemClick, active: activeItem === 'Gaining new skills', className: itemClass },
    ]

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
                Which best describes you?
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="questionGridOptions">
            <Grid.Column className="onBoardingColumn">
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

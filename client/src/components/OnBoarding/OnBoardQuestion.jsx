/* eslint-disable */
import React, { Component } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import TeamIcon from './TeamIcon';

export default class OnBoardQuestion extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    const Items = this.props.answerOptions.map(option => (
      { key: option, name: option, onClick: this.handleItemClick, active: activeItem === option }
      ));
    return (
      <Grid textAlign="center" className="questionGrid">
        <Grid.Row className="questionGrid">
          <Grid.Column>
            <TeamIcon />
            <div className="userNameLabel">
              {this.props.questionLabel}
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="questionGrid">
          <Grid.Column verticalAlign="bottom">
            <Menu secondary vertical items={Items} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

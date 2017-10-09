/* eslint-disable */
import React from 'react';
import { Button, Icon, Grid } from 'semantic-ui-react';

export default class CompletedElementsDivider extends React.Component {
  handleClick = () => {
    this.props.toggleCompletedElements();
  }

  render() {
    return (
      <Button
        fluid
        compact
        size="tiny"
        className="completedSection"
        onClick={this.handleClick}
      >
        <Grid>
          <Grid.Row className="completedGridRow">
            <Grid.Column
              width={15}
              mobile={14}
              textAlign="center"
              verticalAlign="middle"
            >
              <span className="completedMessage">
                {this.props.message}
              </span>
            </Grid.Column>
            <Grid.Column
              floated="right"
              className="completedGridColumn"
            >
              <Icon
                size="huge"
                name={this.props.icon}
                className="completedToggleIcon"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Button>
    );
  }
}

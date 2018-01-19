/* eslint-disable */
import React, { PureComponent } from 'react';
import { Grid, Label, Icon, Segment, Accordion } from 'semantic-ui-react';
import ToolboxInput from './ToolboxInput';
import Touch from '../../Lib/CheckTouch';
import StatisticsLabel from '../../ClientDashboard/RoadmapHeader/StatisticsLabel';
import ChevronDownIcon from '../../Icons/ChevronDownIcon';
import ChevronUpIcon from '../../Icons/ChevronUpIcon';
import ModalComponent from './ModalComponent';

class ClientElement extends PureComponent {
  state = {
    isMouseInside: false,
    activeIndex: 0,
    open: false,
  }

  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  handleAccordionClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  }

  handleOnClientNameClick = (event, data) => {
    this.props.onClientNameClick(event, data);
  }

  handleArchiveClick = () => {
    this.show();
  }

  archiveClient = () => {
    this.close();
    this.props.onArchiveClick(this.props.clientSlug);
  }

  mouseEnter = () => {
    this.setState({
      isMouseInside: true,
    });
  };

  mouseExit = () => {
    this.setState({
      isMouseInside: false,
    });
  };

  render() {
    const { activeIndex } = this.state;

    let finalIconStyles = {};
    if (!this.state.isMouseInside && !Touch.isTouchDevice()) {
      finalIconStyles = {
        opacity: 0,
      };
    } else {
      finalIconStyles = {
        opacity: 1,
      };
    }

    return (
      <Segment
        clearing
        className="coachDashboardSegment"
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseExit}
      >
        <Accordion>
          <Accordion.Title
            index={this.props.clientIndex}
            onClick={this.handleAccordionClick}
            active={activeIndex === this.props.clientIndex}
          >
            <Grid>
              <Grid.Column
                floated="left"
                className="clientName"
              >
                {(activeIndex === this.props.clientIndex) &&
                  <ChevronUpIcon />
                }
                {(activeIndex !== this.props.clientIndex) &&
                  <ChevronDownIcon />
                }
                <Label
                  as="a"
                  id="clientName"
                  className="clientName"
                  name={this.props.clientName}
                  value={this.props.clientSlug}
                  content={this.props.clientName}
                  onClick={this.handleOnClientNameClick}
                />
              </Grid.Column>
              <Grid.Column
                floated="right"
                className="clientActions"
              >
                <Icon
                  link
                  size="large"
                  name="trash outline"
                  style={finalIconStyles}
                  onClick={this.handleArchiveClick}
                />
                <Icon
                  link
                  size="large"
                  name="briefcase"
                  className={this.props.toolboxUrl && 'activeToolbox'}
                />
              </Grid.Column>
            </Grid>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === this.props.clientIndex}>
            <Grid>
              <Grid.Column
                floated="left"
                className="clientContent"
              >
                <label
                  htmlFor="clientName"
                  className="visionLabel"
                >
                  {this.props.clientVision}
                </label>
                <StatisticsLabel
                  isBannerVisible={false}
                  completedStats={this.props.completedStats}
                  incompleteStats={this.props.incompleteStats}
                />
              </Grid.Column>
              <Grid.Column
                floated="right"
                className="toolboxUrl"
              >
                <ToolboxInput
                  updateClientToolbox={this.props.onToolboxUpload}
                  currentClient={this.props.clientSlug}
                  disableOnClickOutside={activeIndex !== this.props.clientIndex}
                  inputValue={this.props.toolboxUrl}
                  placeholder="enter google drive toolbox link"
                />
              </Grid.Column>
            </Grid>
          </Accordion.Content>
        </Accordion>

        <ModalComponent
          negativeLabel="No"
          positiveLabel="Yes"
          handleClose={this.close}
          isVisible={this.state.open}
          modalHeader="Archive Roadmap"
          modalContent={`Are you sure you want to archive ${this.props.clientName}\'s roadmap?`}
          handlePositiveClick={this.archiveClient}
        />

      </Segment>
    );
  }
}

export default ClientElement;

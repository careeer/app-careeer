/* eslint-disable */
import React, { PureComponent } from 'react';
import { Grid, Label, Icon, Segment, Accordion, Modal, Button } from 'semantic-ui-react';
import ToolboxInput from './ToolboxInput';
import { modalStyle, modalHeaderStyle, modalAcceptStyle } from '../../Constants/ClientElementStyles';
import Touch from '../../Lib/CheckTouch';
import StatisticsLabel from '../../ClientDashboard/RoadmapHeader/StatisticsLabel';
import ChevronDownIcon from '../../Icons/ChevronDownIcon';
import ChevronUpIcon from '../../Icons/ChevronUpIcon';

class ClientElement extends PureComponent {
  state = {
    isMouseInside: false,
    activeIndex: 0,
    open: false,
  }

  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })
  handleConfirm = () => this.setState({ open: false })
  handleCancel = () => this.setState({ open: false })

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
    const chevronIcon = activeIndex === this.props.clientIndex ? 'up' : 'down';

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
                  <ChevronUpIcon
                  />
                }
                {(activeIndex !== this.props.clientIndex) &&
                  <ChevronDownIcon
                  />
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
                  CompletedStats={this.props.CompletedStats}
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

        <Modal
          size="mini"
          dimmer="blurring"
          style={modalStyle}
          onClose={this.close}
          open={this.state.open}
        >
          <Modal.Header style={modalHeaderStyle}>
            Archive Roadmap
          </Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to archive {this.props.clientName}&apos;s roadmap?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              negative
              onClick={this.close}
            >
              No
            </Button>
            <Button
              positive
              content="Yes"
              icon="checkmark"
              labelPosition="right"
              style={modalAcceptStyle}
              onClick={this.archiveClient}
            />
          </Modal.Actions>
        </Modal>


      </Segment>
    );
  }
}

export default ClientElement;

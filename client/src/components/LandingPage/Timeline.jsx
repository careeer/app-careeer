import React from 'react';
import { Grid } from 'semantic-ui-react';
import TimelineIcon from '../Icons/TimelineIcon';
import TimelineIconMobile from '../Icons/TimelineIconMobile';

const Timeline = () => (
  <Grid.Row className="timeline">
    <Grid.Column>
      <h2>
        Career support wherever you are
      </h2>
      <h3>
        Choose where you start, progress at your pace.
      </h3>
    </Grid.Column>
    <TimelineIcon />
    <TimelineIconMobile />
  </Grid.Row>
);

export default Timeline;

import React from 'react';
import { Grid } from 'semantic-ui-react';

const WhoWeAreSection = () => (
  <Grid columns="equal">
    <Grid.Row>
      <Grid.Column width="2" />
      <Grid.Column width="14" className="whoWeAre">
        <h3>
          Who We Are
        </h3>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default WhoWeAreSection;

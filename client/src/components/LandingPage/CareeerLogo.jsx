import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

const CareeerLogo = () => (
  <Grid textAlign="left">
    <Grid.Column className="careeerLogo">
      <Header
        as="h2"
        content="C!"
        textAlign="left"
        className="careeer"
      />
    </Grid.Column>
  </Grid>
);

export default CareeerLogo;

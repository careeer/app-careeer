import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

const CareeerLogo = () => (
  <Grid textAlign="left">
    <Grid.Column className="careeerLogo">
      <a
        href="/"
        target="_self"
        rel="noreferrer noopener"
      >
        <Header
          as="h2"
          content="C!"
          textAlign="left"
          className="careeer"
        />
      </a>
    </Grid.Column>
  </Grid>
);

export default CareeerLogo;

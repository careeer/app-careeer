import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

const CareeerLogo = () => (
  <Grid textAlign="left">
    <Grid.Column className="careeerLogo">
      <Link to="/" className="careeer">
        Careeer!
      </Link>
    </Grid.Column>
  </Grid>
);

export default CareeerLogo;

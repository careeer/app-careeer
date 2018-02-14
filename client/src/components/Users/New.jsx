import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import CreateForm from './CreateForm';
import CareeerLogo from '../Lib/CareeerLogo';
import { PLAN } from '../LandingPage/Components/Plans';

const New = () => (
  <div className="createAccountPage">
    <CareeerLogo />
    <Link to="/signIn" className="signInLink">Sign In</Link>
    <Grid
      textAlign="center"
      verticalAlign="middle"
    >
      <CreateForm
        buttonLabel="Create account"
        selectedAccount={PLAN.Standard.id}
      />
    </Grid>
  </div>
);

export default New;

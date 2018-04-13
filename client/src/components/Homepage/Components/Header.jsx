import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

const Header = () => (
  <Grid columns="equal" className="mainHeader">
    <Grid.Column width="2" only="computer" />
    <Grid.Column
      width="3"
      computer="2"
      verticalAlign="middle"
    >
      <Link to="/" className="careeer">
        Careeer!
      </Link>
    </Grid.Column>
    <Grid.Column width="1" verticalAlign="middle">
      <Link to="/About" className="aboutLink">
        About
      </Link>
    </Grid.Column>
    <Grid.Column width="1" verticalAlign="middle">
      <Link to="/Pricing" className="pricingLink">
        Pricing
      </Link>
    </Grid.Column>
    <Grid.Column width="3" computer="2" verticalAlign="middle">
      <Link to="/FAQ" className="faqLink">
        FAQ
      </Link>
    </Grid.Column>
    <Grid.Column
      width="6"
      computer="5"
      textAlign="right"
      verticalAlign="middle"
    >
      <Link to="/signIn" className="signIn">
        Sign In
      </Link>
    </Grid.Column>
    <Grid.Column width="2" verticalAlign="middle">
      <button className="signUpLink">
        <Link to="/signUp">
          Free Trial
        </Link>
      </button>
    </Grid.Column>
  </Grid>
);

export default Header;

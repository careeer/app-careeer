import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import ReactRotatingText from 'react-rotating-text';

const HeroSection = () => (
  <Grid stretched columns="equal" className="heroImage">
    <Grid.Column width="2" />
    <Grid.Column width="4" verticalAlign="middle">
      <h1>
        Transition <br />
        your careeer<br />
        to&nbsp;
        <strong className="rotatingText">
          <ReactRotatingText
            cursor={false}
            pause={2000}
            emptyPause={10}
            typingInterval={50}
            deletingInterval={10}
            items={['Tech', 'Product Management', 'Engineering', 'Tech Sales', 'Design']}
          />
        </strong>
      </h1>
      <button className="signUpLink">
        <Link to="/signUp">
          Sign up for 7 day free trial
        </Link>
      </button>
    </Grid.Column>
  </Grid>
);

export default HeroSection;

import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Icon, Divider } from 'semantic-ui-react';

const Footer = () => (
  <Grid>
    <Grid.Row className="mainFooter">
      <Grid.Column width={2} />
      <Grid.Column width={5} className="leftLinks">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://careeer.typeform.com/to/LPUvoI"
        >
          Become a coach
        </a>
        <br />
        <br />
        <Link to="/FAQ" className="faqLink">
          FAQ
        </Link>
        <br />
        <br />
        <Link to="/Blog" className="blogLink">
          Blog
        </Link>
        <br />
        <br />
        <p>
          &copy; {(new Date().getFullYear())} Careeer Inc. All rights reserved.
        </p>
      </Grid.Column>
      <Grid.Column className="right mediaIcons">
        <a
          href="https://www.facebook.com/careeer.me"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon link circular inverted size="medium" name="facebook f" />
        </a>
        <a
          href="https://www.linkedin.com/company/15235679/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon link circular inverted size="medium" name="linkedin" />
        </a>
        <a
          href="https://www.pinterest.com/careeerme/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon link circular inverted size="medium" name="pinterest" />
        </a>
        <a
          href="https://medium.com/@careeer.me"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon link circular inverted size="medium" name="medium" />
        </a>
      </Grid.Column>
      <Grid.Column
        width={16}
        className="divider"
      >
        <Divider />
      </Grid.Column>
      <Grid.Column className="right">
        <a
          href="https://docs.google.com/a/careeer.me/document/d/11pkP3ns0nQxIyaKf66CEhPAZzdmvaXYIGG9aaVUfFEY/edit?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
        >
          Security
        </a>
        <a
          href="https://docs.google.com/a/careeer.me/document/d/1tfcyC1eshiVvR0VVdtk79542Vp6nmggAmCI3mhQEU4w/edit?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
        >
          Privacy
        </a>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Footer;

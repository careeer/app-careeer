import React from 'react';
import { Link } from 'react-router-dom';
import { Responsive, Icon } from 'semantic-ui-react';

const Header = () => (
  <section className="mainHeader">
    <div className="contentContainer">
      <Responsive maxWidth={700}>
        <Icon link size="big" name="bars" />
      </Responsive>
      <div className="leftLinks">
        <Link to="/" className="careeer">
          Careeer!
        </Link>
        <Link to="/About" className="aboutLink">
          About
        </Link>
        <a href="#pricing" className="pricingLink">
          Pricing
        </a>
      </div>
      <div className="rightLinks">
        <Link to="/signIn" className="signIn">
          Log In
        </Link>
        <button className="signUpLink">
          <Link to="/signUp">
            Free Trial
          </Link>
        </button>
      </div>
    </div>
  </section>
);

export default Header;

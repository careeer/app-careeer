import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Responsive, Icon } from 'semantic-ui-react';

const Header = props => (
  <section className="mainHeader">
    <div className="contentContainer">
      <Responsive maxWidth={700}>
        <Icon link size="big" name="bars" onClick={props.onMenuClick} />
      </Responsive>
      <div className="leftLinks">
        <Link to="/" className="careeer">
          Careeer!
        </Link>
        <Link to="/about" className="aboutLink">
          About
        </Link>
        <a href="#pricing" className="pricingLink">
          Pricing
        </a>
      </div>
      <div className="rightLinks">
        <Link to="/login" className="signIn">
          Log In
        </Link>
        <button className="signUpLink">
          <Link to="/createAccount">
            Free Trial
          </Link>
        </button>
      </div>
    </div>
  </section>
);

Header.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
};

export default Header;

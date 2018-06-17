import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Sidebar, Menu } from 'semantic-ui-react';

const SideNav = props => (
  <Sidebar
    as={Menu}
    animation="overlay"
    width="wide"
    visible={props.visible}
    vertical
    className="side-nav"
  >
    <Menu.Item name="about" onClick={props.onMenuClick}>
      <Link to="/About" className="aboutLink">
        About
      </Link>
    </Menu.Item>
    <Menu.Item name="pricing" onClick={props.onMenuClick}>
      <a href="#pricing" className="pricingLink">
        Pricing
      </a>
    </Menu.Item>
    <Menu.Item name="login" onClick={props.onMenuClick}>
      <Link to="/login" className="login">
        Log In
      </Link>
    </Menu.Item>
    <Menu.Item className="signup">
      <button className="signUpLink">
        <Link to="/signUp">
          Free Trial
        </Link>
      </button>
    </Menu.Item>
  </Sidebar>
);

SideNav.propTypes = {
  visible: PropTypes.bool.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};

export default SideNav;

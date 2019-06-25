import React from 'react';
import PropTypes from 'prop-types';
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
    <Menu.Item name="about" onClick={props.handleAboutUsClick}>
      About
    </Menu.Item>
    <Menu.Item name="pricing" onClick={props.handlePricingClick}>
      Pricing
    </Menu.Item>
    <Menu.Item name="login" onClick={props.handleLoginClick}>
      Log In
    </Menu.Item>
    <Menu.Item name="signup" className="signup" onClick={props.handleSignUpClick}>
      Learn More
    </Menu.Item>
  </Sidebar>
);

SideNav.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleAboutUsClick: PropTypes.func.isRequired,
  handlePricingClick: PropTypes.func.isRequired,
  handleLoginClick: PropTypes.func.isRequired,
  handleSignUpClick: PropTypes.func.isRequired,
};

export default SideNav;

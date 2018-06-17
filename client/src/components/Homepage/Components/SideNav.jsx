import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Menu } from 'semantic-ui-react';

const SideNav = (props) => (
  <Sidebar
    as={Menu}
    animation='overlay'
    width='wide'
    visible={props.visible}
    vertical
    className="side-nav"
  >
    <Menu.Item name='home'>
      <Link to="/">
        Home
      </Link>
    </Menu.Item>
    <Menu.Item name='about'>
      <Link to="/About" className="aboutLink">
        About
      </Link>
    </Menu.Item>
    <Menu.Item name='pricing'>
      <a href="#pricing" className="pricingLink">
        Pricing
      </a>
    </Menu.Item>
    <Menu.Item name='login'>
      <Link to="/login" className="login">
        Log In
      </Link>
    </Menu.Item>
    <Menu.Item className='signup'>
      <button className="signUpLink">
        <Link to="/signUp">
          Free Trial
        </Link>
      </button>
    </Menu.Item>
  </Sidebar>
);

export default SideNav;

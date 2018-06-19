import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import { Sidebar, Dimmer } from 'semantic-ui-react';

import Header from './Components/Header';
import SideNav from './Components/SideNav';
import Home from './Components/Home';
import Faq from './Components/Faq';
import About from './Components/About';
import Footer from './Components/Footer';

import './Styles/Homepage.scss';

class Homepage extends Component {
  state = {
    showSideNav: false,
  }

  onMenuClick = () => {
    this.setState({
      showSideNav: !this.state.showSideNav,
    });
  }

  handleAboutUsClick = () => {
    this.onMenuClick();
    // eslint-disable-next-line
    this.props.history.push('/about');
  }

  handlePricingClick = () => {
    this.onMenuClick();
    this.goToPricingSection();
  }

  goToPricingSection = () => {
    // eslint-disable-next-line
    this.props.history.push('/');

    setTimeout(() => {
      const element = document.getElementById('pricing');
      if (element) element.scrollIntoView();
    }, 0);
  }

  handleLoginClick = () => {
    this.onMenuClick();
    // eslint-disable-next-line
    this.props.history.push('/login');
  }

  handleSignUpClick = () => {
    this.onMenuClick();
    // eslint-disable-next-line
    this.props.history.push('/createAccount');
  }

  render() {
    return (
      <div id="landingPage">
        <Header
          onMenuClick={this.onMenuClick}
          handlePricingClick={this.goToPricingSection}
        />
        <SideNav
          visible={this.state.showSideNav}
          handleAboutUsClick={this.handleAboutUsClick}
          handlePricingClick={this.handlePricingClick}
          handleLoginClick={this.handleLoginClick}
          handleSignUpClick={this.handleSignUpClick}
        />
        <Sidebar.Pushable>
          <Sidebar.Pusher>
            <Dimmer.Dimmable
              blurring
              inverted="true"
              dimmed={this.state.showSideNav}
            >
              <Route
                exact
                path="/"
                render={() => (
                  <Home />
                )}
              />
              <Route
                exact
                path="/faq"
                render={() => (
                  <Faq />
                )}
              />
              <Route
                exact
                path="/about"
                render={() => (
                  <About />
                )}
              />
              <Footer />
              <Dimmer active={this.state.showSideNav} />
            </Dimmer.Dimmable>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default Homepage;

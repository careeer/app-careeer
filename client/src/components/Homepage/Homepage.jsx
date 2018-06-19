import React, { Component } from 'react';
import Route from 'react-router-dom/Route';

import Header from './Components/Header';
import Home from './Components/Home';
import Faq from './Components/Faq';
import About from './Components/About';

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

  render() {
    return (
      <div id="landingPage">
        <Header onMenuClick={this.onMenuClick} />
        <Route
          exact
          path="/"
          render={() => (
            <Home
              showSideNav={this.state.showSideNav}
              handleSideNavClick={this.onMenuClick}
            />
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
      </div>
    );
  }
}

export default Homepage;

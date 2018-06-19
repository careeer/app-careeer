import React, { Component } from 'react';
import Route from 'react-router-dom/Route';

import Header from './Components/Header';
import Home from './Home';
import FAQ from './FAQ';
import About from './About';

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
            <FAQ />
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

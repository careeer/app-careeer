/* eslint-disable */
import React, { Component } from 'react';

export default class New extends Component {
  render() {
    return (
      <form>
        <label>Email</label>
        <input type="email" placeholder="email" />
        <label>Password</label>
        <input type="password" />
        <button>
          Sign In
        </button>
      </form>
    );
  }
}

import React, { Component } from 'react';

import './App.css';
import Authenticate from './components/Authentication/Authenticate';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default Authenticate(App);

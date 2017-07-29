import React, {Component} from 'react';
import RoadmapElementsDashboard from './RoadmapElementsDashboard';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='ui grid container'>
        <div className='column'>
          <RoadmapElementsDashboard />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import HomePage from './pages/HomePage/HomePage';
import GoalsPage from './pages/GoalsPage/Goals';
import CharityPage from './pages/CharityPage/Charity';

class App extends Component {
  render() {
    return (
      <div className="main">
      <HomePage />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import HomePage from './HomePage/HomePage';
import GoalsPage from './GoalsPage/Goals';
import CharityPage from './CharityPage/Charity';
import Style from './App.css';
class App extends Component {
  render() {
    return (
      <div className={Style.body}>
      <HomePage />
      </div>
    );
  }
}

export default App;

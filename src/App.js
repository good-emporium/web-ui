import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import GoalsPage from './Components/GoalsPage/Goals';
import CharityPage from './Components/CharityPage/Charity';
import Style from './App.css';
class App extends Component {
  render() {
    return (
      <Router>
        <div className={Style.body}>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/goal/" component={GoalsPage} />
          <Route path="/org/" component={CharityPage} />
        </div>
      </Router>
    );
  }
}

export default App;

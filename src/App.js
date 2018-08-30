import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import GoalsPage from './Components/GoalsPage/Goals';
import CharityPage from './Components/CharityPage/Charity';
import LoginPage from './Components/LoginPage/Form';
import RegisterPage from './Components/RegisterPage/Form';
import Style from './App.css';
class App extends Component {
  render() {
    return (
      <Router>
        <div className={Style.body}>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/goal/" component={GoalsPage} />
          <Route path="/org/" component={CharityPage} />
          <Route path="/login/" component={LoginPage} />
          <Route path="/register/" component={RegisterPage} />
        </div>
      </Router>
    );
  }
}

export default App;

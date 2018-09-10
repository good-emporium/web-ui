import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import GoalsPage from './pages/GoalsPage/Goals';
import CharityPage from './pages/CharityPage/Charity';
import LoginPage from './pages/LoginPage/Form';
import RegisterPage from './pages/RegisterPage/Form';
import AboutUsPage from './pages/AboutUsPage/AboutUs'
import '../scss/ge-styles.scss'
import '../scss/ge-styles-responsive.scss'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/goal/" component={GoalsPage} />
          <Route path="/org/" component={CharityPage} />
          <Route path="/login/" component={LoginPage} />
          <Route path="/register/" component={RegisterPage} />
          <Route exact={true} path="/aboutUs/" component={AboutUsPage} />
        </div>
      </Router>
    );
  }
}

export default App;

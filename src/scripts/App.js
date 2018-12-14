import React, { Component } from 'react';
import {
  Route,
  BrowserRouter
} from "react-router-dom"; import HomePage from './pages/HomePage/HomePage';
import GoalsPage from './pages/GoalsPage/Goals';
import CharityPage from './pages/CharityPage/Charity';
import LoginPage from './pages/LoginPage/Form';
import RegisterPage from './pages/RegisterPage/Form';
import AboutUsPage from './pages/AboutUsPage/AboutUs';
import Support from './pages/SupportPage/Support';
import '../scss/ge-styles.scss';
import '../scss/ge-styles-responsive.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: localStorage.getItem('organizations'),
      goalID: '',
      orgID: ''

    }
  }

  componentDidMount() {
    if (!localStorage.getItem('organizations')) {
      fetch('https://api.goodemporium.com/v0/organizations')
        .then(response => response.json())
        .then(
          (jsonData) => {
            var JSONObject = [];
            for (var i in jsonData) {
              var key = i;
              var val = jsonData[i];
              for (var j in val) {
                var sub_key = j;
                var sub_val = val[j];
                JSONObject[j] = val[j];
              }
            }
            if (typeof localStorage === 'object') {
              try {
              localStorage.setItem('organizations', JSON.stringify(JSONObject));
              } catch (e) {
           // silently ignore when localStorage is unavailable. The most likely case is private browsing mode.
              }
            }
             this.setState({ items: localStorage.getItem(JSONObject) });

          })
      }

  }

  render() {
    return (
      <div className="container" id="app">
        <BrowserRouter>
          <div className="Content">
            <Route exact={true} path="/" component={HomePage} />
            <Route path="/goal/" component={GoalsPage} />
            <Route path="/org/" component={CharityPage} />
            <Route exact={true} path="/login/" component={LoginPage} />
            <Route exact={true} path="/register/" component={RegisterPage} />
            <Route exact={true} path="/aboutUs/" component={AboutUsPage} />
            <Route exact={true} path="/Support/" component={Support} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
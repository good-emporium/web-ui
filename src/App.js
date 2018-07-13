import React, { Component } from 'react';
import Header from './Header/Header';
import Goals from './Goals/Goals';
import Footer from './Footer/Footer';
import CauseMap from './CauseMap/CauseMap';
class App extends Component {
  render() {
    return (
      <div className="App">
  
        <Header />
        <Goals />
        <CauseMap />
        <Footer />
  

      </div>
    );
  }
}

export default App;

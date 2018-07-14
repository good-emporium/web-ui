import React, { Component } from 'react';
import Header from './Header/Header';
import Goals from './HomePage/Goals/Goals';
import Footer from './Footer/Footer';
import CauseMap from './HomePage/CauseMap/CauseMap';
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

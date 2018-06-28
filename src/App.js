import React, { Component } from 'react';
import Header from './Header/Header';
import StartInfo from './StartInfo/StartInfo';
import Tableau from './Tableau/Tableau';
import Footer from './Footer/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
  
        <Header />
        <StartInfo />
        <Tableau />
        <Footer />
  

      </div>
    );
  }
}

export default App;

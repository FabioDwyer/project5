import React, { Component } from 'react';
import './App.css';
// Custom Imports:
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="flexApp">
          <Header />
          <Main />        
          <Footer />
        </div>
      </div>
    );
  }
  
}

export default App;

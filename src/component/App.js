import React, { Component } from 'react';
import logo from '../images/logo.svg';
import Header from'./app_components/Header';
import Footer from'./app_components/Footer';
import Weather from'./app_components/Weather';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Weather/>
        <br/>
        <br/>
        <br/>
        <Footer/>
      </div>




    );
  }
}

export default App;
  // <Footer/>

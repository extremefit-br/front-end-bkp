import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/page/login/login.js'
import Footer from './components/footer/footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <Footer />
      </div>  
    );
  }
}

export default App;

import React, { Component } from 'react'
import { Switch, Router } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Login from './components/page/login/login.js'
import Empresa from './components/page/empresa/empresa.js'
import Footer from './components/footer/footer.js'

const App = () =>(
  <React.Fragment>
    <Login />
    <Footer />
  </React.Fragment>
)

export default App;

import React, { Component } from 'react'; 
import './App.scss';
import getData from '../../utilities.js'; 

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      error: '', 
      featuredPhoto: null
    }
  }

 render() {
   return (
    <h1>HELLO MY PARTY PEOPLE</h1>
   )
 }



}

export default App;

import React, { Component } from 'react'; 
import './App.scss';
import { getData } from '../../utilities.js'; 

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      error: '', 
      featuredPhoto: null
    }
  }

  componentDidMount() {
    getData(earthDay)
      // .then(response => console.log(response.photos))
    .then(response => this.setState({featuredPhoto: response.photos[0]}))
    .catch(error => this.setState({error: error}))
  }

 render() {
   return (
    <h1>HELLO MY PARTY PEOPLE</h1>
   )
 }



}

export default App;

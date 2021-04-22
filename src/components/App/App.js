import React, { Component } from 'react'; 
import './App.scss';
import { getData } from '../../utilities.js'; 
import SearchForm from '../SearchForm/SearchForm'; 
import PhotoDetails from '../PhotoDetails/PhotoDetails'; 

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      error: '', 
      featuredDay: null,
      inputDate: ''
    }
  }

  componentDidMount() {
    getData()
      // .then(response => console.log(response.photos))
    .then(response => this.setState({featuredDay: response.photos[0]}))
    .catch(error => this.setState({error: error}))
  }

  getPhoto = (date) => {
    getData(date)
    .then(response => this.setState({featuredDay: response.photos[0]}))
    .catch(error => this.setState({error: error}))
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

 render() {
   return (
     <main>
      <SearchForm 
          handleChange={this.handleChange}
          getPhoto={this.getPhoto}
          inputDate={this.state.inputDate}
      />
      <PhotoDetails featuredDay={this.state.featuredDay}/>
     </main>
   )
 }



}

export default App;

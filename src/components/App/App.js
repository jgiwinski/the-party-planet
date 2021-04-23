import React, { Component } from 'react'; 
import './App.scss';
import '../../animista.css'
import { getData } from '../../utilities.js'; 
import Header from '../Header/Header'; 
import SearchForm from '../SearchForm/SearchForm'; 
import PhotoDetails from '../PhotoDetails/PhotoDetails'; 

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      error: '', 
      featuredDay: '',
      inputDate: '',
      message: ''
    }
  }

  componentDidMount() {
    getData('2021-4-21')
      .then(response => this.setState({featuredDay: response.photos[0]}))
      .catch(error => this.setState({error: error}))
  }

  getPhoto = (date) => {
    getData(date)
      .then(response => this.setState({featuredDay: response.photos[0]}))
      .catch(error => this.setState({error: error}))
  }

  showPhoto = (event) => {
    event.preventDefault(); 
    this.getPhoto(this.state.inputDate)
  }

  handleChange = e => {
      this.setState({ inputDate: e.target.value })
  }

 render() {
   return (
     <main>
     <Header />
      <SearchForm 
          handleChange={this.handleChange}
          showPhoto={this.showPhoto}
          inputDate={this.state.inputDate}
      />
      {this.state.featuredDay && <PhotoDetails featuredDay={this.state.featuredDay}/>}
      {/* <PhotoDetails featuredDay={this.state.featuredDay}/> */}
     </main>
   )
 }
}

export default App;

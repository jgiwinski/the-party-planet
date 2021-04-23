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
      selectedOccasion: '',
      inputDate: '',
      message: ''
    }
  }

  componentDidMount() {
    getData('2021-4-20')
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
    switch (this.state.selectedOccasion) {
      case 'birthday' :
        console.log('birthday');
        break;
      case 'anniversary' : 
        console.log('anniversary')
        break; 
      case 'graduation' :
        console.log('graduation')
        break; 
      case 'comingOut' :
        console.log('comingOut')
        break; 
      case 'other' :
        console.log('PARTY ANYWAY MOTHER FUCKERS')
        break;
      default: 
        console.log('OH BOY OH BOY')
    }
  }

  handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value})
  }

  render() {
    return (
      <main>
      <Header />
        <SearchForm 
            handleChange={this.handleChange}
            showPhoto={this.showPhoto}
            selectedOccasion={this.state.selectedOccasion}
            inputDate={this.state.inputDate}
            message={this.state.message}
        />
        {this.state.featuredDay && <PhotoDetails featuredDay={this.state.featuredDay}/>}
      </main>
    )
  }
  }

export default App;

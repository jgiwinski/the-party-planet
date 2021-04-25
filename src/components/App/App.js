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
      message: '', 
      favorites: []
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
    console.log(this.state.featuredDay)
    switch (this.state.selectedOccasion) {
      case 'birthday' :
        this.setState({message: 'Happy Birthday!'})
        break;
      case 'anniversary' : 
        this.setState({message: 'Happy Anniversary!'})
        break; 
      case 'graduation' :
        this.setState({message: 'Congratulations! You did it!'})
        break; 
      case 'comingOut' :
        this.setState({message: 'Congratulations! A big day!'})
        break; 
      case 'other' :
        this.setState({message: 'Just a special party day!'})
        break;
      default: 
        this.setState({message: 'Just a Tuesday?'})
    }
  }

  handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value})
  }

  favoritePhoto = (event) => {
      event.preventDefault() 
      this.setState({ favorites: [...this.state.favorites, this.state.featuredDay]})
      event.target.classList.add('selected')
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
        {this.state.featuredDay && 
        <PhotoDetails 
            featuredDay={this.state.featuredDay}
            message={this.state.message}
            favoritePhoto={this.favoritePhoto}
        />}
      </main>
    )
  }
  }

export default App;

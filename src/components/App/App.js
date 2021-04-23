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
    switch (this.state.selectedOccasion) {
      case 'birthday' :
        console.log('birthday');
        break;
        case 'anniversary' : 
        console.log('anniversary')
        break; 
        default: 
        console.log('OH BOY OH BOY')
    }
  }

  handleChange = e => {
      this.setState({ [e.target.name]: e.target.value })
      console.log(this.state.inputDate)
      console.log(this.state.selectedOccasion)
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

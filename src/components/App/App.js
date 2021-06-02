import React, { Component } from 'react'; 
import { Route, Switch, Link } from 'react-router-dom';
import './App.scss';
import '../../animista.css'
import { getData } from '../../utilities.js'; 
import Header from '../Header/Header.js'; 
import SearchForm from '../SearchForm/SearchForm'; 
import PhotoDetails from '../PhotoDetails/PhotoDetails'; 
import Favorites from '../Favorites/Favorites'; 
import Footer from '../Footer/Footer'; 

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
      if(!this.state.favorites.includes(this.state.featuredDay)){
        this.setState({ favorites: [...this.state.favorites, this.state.featuredDay]})
      }  
  }

  getTodaysDate = () => {
    const today = new Date(); 
    const date = today.getFullYear() +'-0'+(today.getMonth()+1)+'-0'+today.getDate();
    return date; 
  }

  render() {
    return (
      <main>
      <Header />
          <Switch>
              <Route exact path="/" render={() => { 
                  return (
                    this.state.error ? 
                    <h1>Looks like there was an {this.state.error} error</h1> :
                      <div>
                        <SearchForm 
                            handleChange={this.handleChange}
                            showPhoto={this.showPhoto}
                            getTodaysDate={this.getTodaysDate}
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
                    </div> 
                   ) } }/>
              <Route exact path="/favorites" render={() => 
                   <Favorites favorites={this.state.favorites}/>
                   }/>
              <Route render={() => <Link to='/' className='lost-error'><h1> 404: Please click here to return to the home page</h1></Link>}/>
          </Switch>
        <Footer />
      </main>
    )
  }
  }

export default App;

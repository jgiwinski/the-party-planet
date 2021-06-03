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
import Swal from 'sweetalert2'; 

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      error: '', 
      featuredDay: '',
      selectedOccasion: '',
      inputDate: '',
      message: '', 
      favorites: this.getFromLocal() || []
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
      this.setState({ [event.target.name]: event.target.value })
  }

  saveToLocal = () => {
    const toStore = JSON.stringify(this.state.favorites)
    localStorage.setItem('savedPhotos', toStore)
  }

  getFromLocal = () => {
    const getStore = localStorage.getItem('savedPhotos')
    const parsedStore = JSON.parse(getStore); 
    return parsedStore; 
  }

  favoritePhoto = async (event) => {
      event.preventDefault() 
      if(!this.state.favorites.includes(this.state.featuredDay)){
        await this.setState({ favorites: [...this.state.favorites, this.state.featuredDay] });
        this.saveToLocal(); 
        Swal.fire (
          'This photo has been added to your favorites!',
          'Check it out on the favorites page',
          'success'
        )
      } else {
        Swal.fire (
          'This photo has already been added to your favorites', 
          'Try selecting a different date', 
          'warning'
        )
      }
  }

  removePhoto = (event) => {
    event.preventDefault() 
    const updatedFavorites = this.state.favorites.filter(favorite => {
      let intID = parseInt(event.target.id)
      return favorite.id !== intID
    })
    this.setState({ favorites: updatedFavorites })
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
                   <Favorites 
                        favorites={this.state.favorites}
                        removePhoto={this.removePhoto}
                        />
                   }/>
              <Route render={() => <Link to='/' className='lost-error'><h1> 404: Please click here to return to the home page</h1></Link>}/>
          </Switch>
        <Footer />
      </main>
    )
  }
  }

export default App;

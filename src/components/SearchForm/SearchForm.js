import React, { Component } from 'react'; 
import PropTypes from 'prop-types'; 
import { getData } from '../../utilities.js'; 
import './SearchForm.scss'; 

// const SearchForm = ({showPhoto, handleChange, inputDate, selectedOccasion}) => {
class SearchForm extends Component {
    constructor() {
        super(); 
            this.state = {
                message: '',
                inputDate: ''
            }
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

    getPhoto = (date) => {
        getData(date)
          .then(response => this.setState({featuredDay: response.photos[0]}))
          .catch(error => this.setState({error: error}))
      }
            render() {
                return (

                    // <select name="occasion-container" id="occasion-list" multiple>
                    //     <option value="birthday">BIRTHDAY</option>
                    //     <option value="anniversary">ANNIVERSARY</option>
                    //     <option value="graduation">GRADUATION</option>
                    //     <option value="comingOut">COMING OUT</option>
                    //     <option value="other">OTHER</option>
                    // </select>
                    <form>
                    <div className="occasion-btn-container" >
                        <button className="occasion-btn">BIRTHDAY</button>
                        <button className="occasion-btn">ANNIVERSARY</button>
                        <button className="occasion-btn">GRADUATION</button>
                        <button className="occasion-btn">COMING OUT</button>
                        <button className="occasion-btn">OTHER</button>
                    </div>
                    <input 
                        type={"date"}
                        min={"2015-01-01"}
                        max={"2021-12-31"}
                        name={"inputDate"}
                        value={this.state.inputDate}
                        onChange={e => this.handleChange(e)}
                    ></input>
                    <button type='submit' onClick={e => this.showPhoto(e)}>Launch!</button>
                </form>
                )
            }
}
    // return (
        // <form>
        //     <div className="occasion-btn-container" >
        //         <button className="occasion-btn">BIRTHDAY</button>
        //         <button className="occasion-btn">ANNIVERSARY</button>
        //         <button className="occasion-btn">GRADUATION</button>
        //         <button className="occasion-btn">COMING OUT</button>
        //         <button className="occasion-btn">OTHER</button>
        //     </div>
            {/* <div className="radio-toolbar">
                <input 
                type="radio" 
                id="radioBirthday" 
                name="celebration" 
                checked={selectedOccasion === 'birthday'}
                value="birthday"
                onChange={e => handleChange(e)}
                />
                <label for="radioBirthday">BIRTHDAY</label>

                <input 
                type="radio" 
                id="radioAnniversary" 
                name="celebration" 
                checked={selectedOccasion === 'anniversary'}
                value="anniversary"
                onChange={e => handleChange(e)}
                />
                <label for="radioAnniversary">ANNIVERSARY</label>

                <input 
                type="radio" 
                id="radioGraduation" 
                name="celebration" 
                checked={selectedOccasion === 'graduation'}
                value="graduation"
                onChange={e => handleChange(e)}
                />
                <label for="radioGraduation">GRADUATION</label> 

                <input 
                    type="radio" 
                    id="radioComingOut" 
                    name="celebration" 
                    checked={selectedOccasion === 'comingOut'}
                    value="comingOut"
                    onChange={e => handleChange(e)}
                />
                <label for="radioComingOut">COMING OUT</label> 

                <input 
                type="radio" 
                id="radioOther" 
                name="celebration" 
                checked={selectedOccasion === 'other'}
                value="other"
                onChange={e => handleChange(e)}
                />
                <label for="radioOther">OTHER</label> 
            </div> */}
            {/* <input 
                type={"date"}
                min={"2015-01-01"}
                max={"2021-12-31"}
                name={"inputDate"}
                value={inputDate}
                onChange={e => handleChange(e)}
            ></input>
            <button type='submit' onClick={e => showPhoto(e)}>Launch!</button>
        </form> */}
//     )
// }

export default SearchForm; 

SearchForm.propTypes = {
    type: PropTypes.string, 
    value: PropTypes.string, 
}
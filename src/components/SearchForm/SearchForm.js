import React from 'react'; 
import PropTypes from 'prop-types'; 
import './SearchForm.scss'; 

const SearchForm = ({showPhoto, handleChange, inputDate}) => {

        return (
            <form>
             <div className="radio-toolbar">
                <input 
                    type="radio" 
                    id="radioBirthday" 
                    name= {"selectedOccasion"}
                    value="birthday"
                    onChange={e => handleChange(e)}
                    />
                <label for="radioBirthday">BIRTHDAY</label>

                <input 
                    type="radio" 
                    id="radioAnniversary" 
                    name={"selectedOccasion"}
                    value="anniversary"
                    onChange={e => handleChange(e)}
                    />
                <label for="radioAnniversary">ANNIVERSARY</label>

                <input 
                    type="radio" 
                    id="radioGraduation" 
                    name={"selectedOccasion"}
                    value="graduation"
                    onChange={e => handleChange(e)}
                    />
                <label for="radioGraduation">GRADUATION</label> 

                <input 
                    type="radio" 
                    id="radioComingOut" 
                    name={"selectedOccasion"}
                    value="comingOut"
                    onChange={e => handleChange(e)}
                />
                <label for="radioComingOut">COMING OUT</label> 

                <input 
                    type="radio" 
                    id="radioOther" 
                    name={"selectedOccasion"}
                    value="other"
                    onChange={e => handleChange(e)}
                    />
                <label for="radioOther">OTHER</label> 
            </div>
            <div className="date-container">
                <input 
                    className="calendar"
                    type={"date"}
                    min={"2015-01-01"}
                    max={"2021-12-31"}
                    name={"inputDate"}
                    value={inputDate}
                    onChange={e => handleChange(e)}
                    required
                ></input>
                <button className="launch-btn" type="submit" onClick={e => showPhoto(e)}>Launch!</button>
            </div>
        </form>
        )
}

export default SearchForm; 

SearchForm.propTypes = {
    type: PropTypes.string, 
    value: PropTypes.string, 
}
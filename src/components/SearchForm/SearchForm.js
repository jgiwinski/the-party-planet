import React from 'react'; 
import PropTypes from 'prop-types'; 
import './SearchForm.scss'; 

const SearchForm = ({showPhoto, handleChange, inputDate, selectedOccasion}) => {

    return (
        <form>
            <div class="radio-toolbar">
                <input 
                type="radio" 
                id="radioBirthday" 
                name="celebration" 
                // checked={selectedOccasion === 'birthday'}
                value="birthday"
                onChange={e => handleChange(e)}
                />
                <label for="radioBirthday">BIRTHDAY</label>

                <input 
                type="radio" 
                id="radioAnniversary" 
                name="celebration" 
                // checked={selectedOccasion === 'anniversary'}
                value="anniversary"
                onChange={e => handleChange(e)}
                />
                <label for="radioAnniversary">ANNIVERSARY</label>

                <input 
                type="radio" 
                id="radioGraduation" 
                name="celebration" 
                // checked={selectedOccasion === 'graduation'}
                value="graduation"
                onChange={e => handleChange(e)}
                />
                <label for="radioGraduation">GRADUATION</label> 

                <input 
                type="radio" 
                id="radioComingOut" 
                name="celebration" 
                // checked={selectedOccasion === 'comingOut'}
                value="comingOut"
                onChange={e => handleChange(e)}
                />
                <label for="radioComingOut">COMING OUT</label> 

                <input 
                type="radio" 
                id="radioOther" 
                name="celebration" 
                // checked={selectedOccasion === 'other'}
                value="other"
                onChange={e => handleChange(e)}
                />
                <label for="radioOther">OTHER</label> 
            </div>
            <input 
                type={"date"}
                min={"2015-01-01"}
                max={"2021-12-31"}
                name={"inputDate"}
                value={inputDate}
                onChange={e => handleChange(e)}
            ></input>
            <button type='submit' onClick={e => showPhoto(e)}>Launch!</button>
        </form>
    )
}

export default SearchForm; 

SearchForm.propTypes = {
    type: PropTypes.string, 
    value: PropTypes.string, 
}
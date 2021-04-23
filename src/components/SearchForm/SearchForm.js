import React from 'react'; 
// import PropTypes from 'prop-types'; 

const SearchForm = ({showPhoto, handleChange, inputDate}) => {
    return (
        <form>
            <div class="radio-toolbar">
                <input type="radio" id="radioBirthday" name="celebration" value="birthday"/>
                <label for="radioBirthday">BIRTHDAY</label>

                <input type="radio" id="radioAnniversary" name="celebration" value="anniversary"/>
                <label for="radioAnniversary">ANNIVERSARY</label>

                <input type="radio" id="radioGraduation" name="celebration" value="graduation"/>
                <label for="radioGraduation">GRADUATION</label> 

                <input type="radio" id="radioComingOut" name="celebration" value="comingOut"/>
                <label for="radioComingOut">COMING OUT</label> 

                <input type="radio" id="radioOther" name="celebration" value="other"/>
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
            <button onClick={e => showPhoto(e)}>Launch!</button>
        </form>
    )
}

export default SearchForm; 
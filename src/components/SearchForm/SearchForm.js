import React from 'react'; 
// import PropTypes from 'prop-types'; 

const SearchForm = ({showPhoto, handleChange, inputDate}) => {
    return (
        <form>
            <input 
                type={"date"}
                name={"inputDate"}
                value={inputDate}
                onChange={e => handleChange(e)}
            ></input>
            <button onClick={e => showPhoto(e)}>Launch!</button>
        </form>
    )
}

export default SearchForm; 
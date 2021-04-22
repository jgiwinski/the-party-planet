import React from 'react'; 
// import PropTypes from 'prop-types'; 

const SearchForm = ({getPhoto, handleChange, inputDate}) => {
    return (
        <form>
            <input 
                type={"date"}
                name={"inputDate"}
                value={inputDate}
                onChange={e => handleChange(e)}
            ></input>
            <button onClick={e => getPhoto(e)}>Launch!</button>
        </form>
    )
}

export default SearchForm; 
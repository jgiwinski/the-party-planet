import React from 'react';
import './Photo.scss';
import PropTypes from 'prop-types';

const Photo = ({ id, image, date, removePhoto }) => {

    const slashDate = date.replaceAll('-', '/')
    const formatDate = inputDate => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date = new Date(inputDate);
        return monthNames[date.getMonth()] + ' ' + date.getDate() ;
    }

    return (
        <article className="fav-photo-container">
            <img className="photo" src={image} alt="Favorite Mars"></img>
            <h1>{formatDate(slashDate)}</h1>
            <button id={id} className="remove-btn" onClick={e => removePhoto(e)}>Delete</button>
        </article>
    )
}

export default Photo;

Photo.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string,
    date: PropTypes.string
}
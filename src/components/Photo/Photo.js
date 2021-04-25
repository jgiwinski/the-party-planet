import React from 'react';
import './Photo.scss';
// import PropTypes from 'prop-types';

const Photo = ({ image, date}) => {
    return (
        <article className="photo">
            <img src={image} alt="Favorite Mars"></img>
            <h1>{date}</h1>
        </article>
    )
}

export default Photo;

// Photo.propTypes = {
//     id: PropTypes.number,
//     image: PropTypes.string,
//     poster: PropTypes.string,
//     rating: PropTypes.number
// }
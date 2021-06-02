import React from 'react';
import './Favorites.scss';
import Photo from '../Photo/Photo'; 
import PropTypes from 'prop-types';

const Favorites = ({ favorites }) => {

    const favoritePhotos = favorites.map(photo => {
        return (
            <Photo 
                id={photo.id}
                key={photo.id}
                image={photo.img_src}
                date={photo.earth_date}
            />
        )
    })

    return (
        <>
            {favoritePhotos.length === 0 ?
            <h1 className="no-fav-msg">You haven't added any favorite photos yet!</h1> :
            <section className="grid-display">
                {favoritePhotos}
            </section> 
            }
        </>
    )
}

export default Favorites; 

Favorites.propTypes = {
    favorites: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.number,
    image: PropTypes.string,
    date: PropTypes.string
}
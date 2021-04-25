import React from 'react';
import './Favorites.scss';
import Photo from '../Photo/Photo'; 

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
        <section className="grid-display">
            {favoritePhotos}
        </section>
    )
}

export default Favorites; 
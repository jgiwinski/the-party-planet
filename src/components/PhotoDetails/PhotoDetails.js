import React from 'react'; 

const PhotoDetails = ({ featuredDay }) => {

    return (
        <div>
            <h1>TODAYS MARS PHOTO</h1>
            <img src={featuredDay.img_src} alt={'Mars'}></img>
        </div>
    )
}

export default PhotoDetails; 
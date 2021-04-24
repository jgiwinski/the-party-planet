import React from 'react'; 
import './PhotoDetails.scss'; 

const PhotoDetails = ({ featuredDay, message, favoritePhoto }) => {
    const { img_src, rover, earth_date, camera } = featuredDay; 
    const slashDate = earth_date.replaceAll('-', '/')
    const formatDate = inputDate => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date = new Date(inputDate);
        return monthNames[date.getMonth()] + ' ' + date.getDate() ;
    }

    return (
        <div className="main-container">
            <section className="photo-container">
                <img className="main-image" src={img_src} alt={'Mars'}></img>
            </section>
            <section className="details-container">
                <h1>{message}</h1>
                <h2>Photo Taken By: {rover.name}</h2>
                <h3 className="camera">Taken with {rover.name}'s <br/>{camera.full_name}</h3>
                <div className="line"></div>
                <h1>{formatDate(slashDate)}</h1>
                <div className="line"></div>
                <button className="btn">CELEBRATE!</button>
                <button className="btn" onClick={e => favoritePhoto(e)}>FAVORITE</button> 
               </section>
        </div>
    )
}

export default PhotoDetails; 
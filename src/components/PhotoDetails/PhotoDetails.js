// import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react'; 
import './PhotoDetails.scss'; 
import ReactCanvasConfetti from 'react-canvas-confetti';
import Realistic from './Realistic'; 

const PhotoDetails = ({ featuredDay, message, favoritePhoto }) => {
    const { img_src, rover, earth_date, camera } = featuredDay; 
    const slashDate = earth_date.replaceAll('-', '/')
    const formatDate = inputDate => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date = new Date(inputDate);
        return monthNames[date.getMonth()] + ' ' + date.getDate() ;
    }

    // const [isFav, notFav] = useState(state.favorites.includes(state.featuredDay))

    // const toggleFav = () => {
    //     if (isFav) {
    //         setFav(false)
    //       } else {
    //         notFav(true)
    //       }
    //   }

    //   useEffect(() => {
    //     if (isFav && !state.favorites.includes(singleArtwork[0])) {
    //       addToFavList(singleArtwork[0], state.favorites);
    //     } else if (!isFav && state.favorites.includes(singleArtwork[0])){
    //       removeFromFavList(singleArtwork[0], state.favorites);
    //     }
    //   }, [isFav])

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
                <button className="btn" onClick={function noRefCheck(){}}
                    type="button">CELEBRATE</button>
                    <Realistic />
                        <ReactCanvasConfetti
                        angle={90}
                        className="canvas"
                        colors={[
                        '#26ccff',
                        '#a25afd',
                        '#ff5e7e',
                        '#88ff5a',
                        '#fcff42',
                        '#ffa62d',
                        '#ff36ff'
                        ]}
                        decay={0.8}
                        drift={0}
                        gravity={1}
                        origin={{
                        x: 0.5,
                        y: 0.5
                        }}
                        particleCount={809}
                        resize
                        scalar={1}
                        shapes={[
                        'circle',
                        'square'
                        ]}
                        spread={360}
                        startVelocity={45}
                        ticks={600}
                        useWorker
                        zIndex={-1}
                        />
                <button className="btn" onClick={e => favoritePhoto(e)}>ADD TO FAVORITES</button> 
                {/* <article class="message">
                    <h1 id="message">Placeholder</h1>
                </article> */}
               </section>
        </div>
    )
}

export default PhotoDetails; 



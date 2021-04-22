import React from 'react'; 

const PhotoDetails = ({ featuredDay }) => {
    const { img_src, rover, earth_date } = featuredDay; 
    const slashDate = earth_date.replaceAll('-', '/')
    const formatDate = inputDate => {
        console.log(inputDate)
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date = new Date(inputDate);
        console.log(date)
        return monthNames[date.getMonth()] + ' ' + date.getDate() ;
    }

    return (
        <div>
            <section>
                <img src={img_src} alt={'Mars'}></img>
            </section>
            <section>
                <h1>Your Mars Photo!</h1>
                <h2>Photo Taken By: {rover.name}</h2>
                <h1>{formatDate(slashDate)}</h1>
                <button>CELEBRATE!</button>
            </section>
        </div>
    )
}

export default PhotoDetails; 
import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1 className='title'>The Party Planet</h1>
            <h2 className='tagline'>A celebration out of this world!</h2>
            <div className="nav-btn-container">
                <Link to={"/"} aria-label="home">
                    <button className="nav-btn">HOME</button>
                </Link>
                <Link to={"/favorites"} aria-label='favorites'> 
                    <button className="nav-btn">FAVORITES</button>
                </Link>
            </div>
        </header>
    )
}

export default Header; 
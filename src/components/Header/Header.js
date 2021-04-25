import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <h1 className='title'>The Party Planet</h1>
            <h3 className='tagline'>A celebration out of this world!</h3>
            <div className="nav-btn-container">
                <button className="nav-btn">HOME</button>
                <button className="nav-btn">FAVORITES</button>
            </div>
        </header>
    )
}

export default Header; 
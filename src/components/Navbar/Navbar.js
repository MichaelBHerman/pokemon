import React from 'react';
import './style.css';
import navlogo from '../images/pokedex.png'

function Navbar() {
    return (
        <div className="Navbar">
            <img src={navlogo} className='Navlogo'/>
            
        </div>
    );
}

export default Navbar;

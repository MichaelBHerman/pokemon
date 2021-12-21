import React from 'react';
import './style.css';
import navlogo from '../images/pokedex.png';
import pikachu from '../images/pikachu.gif';
import jigglypuff from "../images/jigglypuff.gif";
import red from '../images/red.mp4';

function Navbar() {
    return (
        <div className="Navbar">
            {/* <video id='background-video' autoPlay loop muted>
            <source src={red} type='video/mp4'/>
            </video> */}
            {/* <img src={pikachu} className="Pikachu"/> */}
            <img src={jigglypuff} className='Jigglypuff'/>
            <img src={navlogo} className='Navlogo'/>
           
            
        </div>
    );
}

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';
import anime from 'animejs';

const Navbar = () => {


    return(
        <>
            <nav>
                <div className="logo" >LOGO TO GO HERE!!!</div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/">Saved Artwork</Link>
                    </li>
                </ul>
                
            </nav>
            <div className="block-colour"/>
        </>
    );
};

export default Navbar;
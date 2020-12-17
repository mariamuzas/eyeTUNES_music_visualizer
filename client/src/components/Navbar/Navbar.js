import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';
import logo from '../../Logo1.svg'

const Navbar = () => {


    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <img src={logo} alt="logo" className="logo" />
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                
            </nav>
            <div className="block-colour"/>
        </>
    );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {

    return(
        <>
            <div className="logo">LOGO TO GO HERE!!!</div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                {/* <li>
                    <Link to="/pricing">User</Link>
                </li> */}
            </ul>
        </>
    );
};

export default Navbar;
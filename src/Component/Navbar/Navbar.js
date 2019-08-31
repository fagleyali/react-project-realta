import React from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css'

function Navbar (props){
    return (
        <div>
            <nav className='navBody'>
                <Link   to='#' >Buy</Link>
                <Link   to='#' >Rent</Link>
                <Link   to='#' >Sell</Link>
                <Link   to='#' >Home Loans</Link>
                <Link   to='#' >Agent Finder</Link>
                This is a NavBar
                <Link   to='#' >List your rental</Link>
                <Link   to='#' >Advertise</Link>
                <span className='nav-span'>

                <Link   to='#' >Sign in</Link>
                or
                <Link   to='#' >Join</Link>
                </span>
                <Link   to='#' >Help</Link>
                
            </nav>
        </div>
    )
}

export default Navbar;
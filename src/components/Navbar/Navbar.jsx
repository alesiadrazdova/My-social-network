import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return(
        <nav className='nav'>
        <div className='link'>
          <NavLink to='/profile'>Profile</NavLink>
          </div>
        <div className='link'>
          <NavLink to='/dialog'>Messages</NavLink>
          </div>
        <div className='link'>
          <NavLink to='/news'>News</NavLink>
          </div>
        <div className='link'>
          <NavLink to='/mymusic'>Music</NavLink>
          </div>
        <div className='link'>
          <NavLink to='/settings'>Settings</NavLink>
          </div>
      </nav>
    )

}

export default Navbar
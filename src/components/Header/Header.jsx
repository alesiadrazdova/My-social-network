import React from 'react';
import './Header.css'
import logo from '../../assets/images/graphics.svg';

 const Header = () => {
    return (
        <header className='header'>
        <img src={logo} alt=' ' className='logo'/>
      </header>
    )
}
export default Header
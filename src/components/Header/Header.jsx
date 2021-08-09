import React from 'react';
import logo from '../../assets/images/graphics.svg';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

  return (
    <header className='header'>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
      <div className='logo-wrapper'>
        <img src={logo} alt=' ' className='logo' />
        <div className='text-logo'>Universe</div>
      </div>
      </Link>
    </header>
  );
};

export default Header;

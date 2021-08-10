import React from 'react';
import logo from '../../assets/images/graphics.svg';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = (props) => {

  return (
    <header className='header'>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
      <div className='logo-wrapper'>
        <img src={logo} alt=' ' className='logo' />
        <div className='text-logo'>Universe</div>
      </div>
      </Link>
      <div className='login-block'>
        { props.isAuth ? props.isAuth : <NavLink to={'/login'}>Login</NavLink> }
        
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import Logo from './g-dino.png'
import './Header.css';

const Header = () => {
  return(
    <header> 
      <img src={Logo} alt='Dinosaur Logo' />
    </header>
  );
}

export default Header;
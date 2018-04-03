import React, {Component} from 'react';
import Logo from './g-dino.png'
import './Header.css';

class Header extends Component {
  render() {
    return(
      <header>
        <img src={Logo} alt='logo' />
      </header>
    );
  }
}

export default Header;  
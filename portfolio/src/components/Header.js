import React from 'react';
import './styles/Header.css';
//imagenes
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='container-nav'>
          {/* logo */}
          <a href='#'>
            <img src={Logo} alt=''/>
          </a>
          {/* button */}
          <button className='btn btn-sm'>Trabaja conmigo</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
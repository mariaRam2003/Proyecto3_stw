import React from 'react';
import './styles/Nav.css'
//iconos
import { BsHouseDoorFill, BsPersonFill } from 'react-icons/bs';
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs';
//link
import { Link } from 'react-scroll';

const Nav = () => {
    return (
      <nav className='nav'>
        <div className='container mx-auto'>
          <div className='nav-container'>
            <Link to='home' activeClass='active' smooth={true} spy={true} className='nav-link'>
              <BsHouseDoorFill />
            </Link>
            <Link to='about' activeClass='active' smooth={true} spy={true} className='nav-link'>
              <BsPersonFill />
            </Link>
            <Link to='services' activeClass='active' smooth={true} spy={true} className='nav-link'>
              <BsClipboardData />
            </Link>
            <Link to='work' activeClass='active'smooth={true} spy={true} className='nav-link'>
              <BsBriefcase />
            </Link>
            <Link to='contact' activeClass='active' smooth={true} spy={true} className='nav-link'>
              <BsChatSquare />
            </Link>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Nav;
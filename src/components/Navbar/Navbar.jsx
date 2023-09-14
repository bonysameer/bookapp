import React, { useState } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import {HiOutlineMenuAlt3} from 'react-icons/hi'
//import Offcanvas from 'react-bootstrap/Offcanvas';


const Navbar = () => {
   const [toggleMenu, setToggleMenu] = useState(false);
   const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <div className='nav-content'>
      <img className='book-image' src={require('../../images/book.png')} alt=''/>
      <span className='text-uppercase fw-7 fs-24 ls-1'>BOOKHUB</span>
      
      <button type = "button" className='navbar-toggler-btn menu-icon' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
          <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Books</Link>
            </li>
            <li className='nav-item'>
              <Link to = "music" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Music</Link>
            </li>
            <li className='nav-item'>
               <Link to = "films" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Films</Link>
            </li>
            <li className='nav-item'>
               <Link to = "games" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Games</Link>
            </li>
          </ul>
        </div>
      {/* <button type='button' onClick={handleNavbar}> <img className='menu-icon' src={require('../../images/menu-icon.png')} alt='toggle-menu'/> </button> */}
      {/* <div className={toggleMenu ? "navbar-collapse show-navbar-collapse":"navbar-collapse"}> */}
         {/* <ul> */}
            {/* <li className='nav-item'> */}
              {/* <Link to = "book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link> */}
            {/* </li> */}
            {/* <li className='nav-item'> */}
              {/* <Link to = "about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>about</Link> */}
            {/* </li>   */}
         {/* </ul> */}
{/*  */}
      {/* </div> */}
    </div>
  )
}

export default Navbar

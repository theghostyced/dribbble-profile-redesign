import React from 'react';
import logo from '../static/dribbble.svg';

function Header() {
  return (
    <div className="header header--grey w-full h-16 md:h-20 text-white bg-blue">
      <div className="flex justify-between items-center md:py-5 px-6 py-3">
        <a href="#!" className="visible sm:hidden font-semibold menu px-2 py-1">Menu</a>
        <div className="logo w-24 flex justify-center items-center">
          {/* <span className="block h-2 w-full"></span> */}
          <img src={logo} alt="Logo" className="h-10"/>
        </div>
        <p className="notification w-8 h-8"></p>
      </div>
    </div>
  )
}

export default Header

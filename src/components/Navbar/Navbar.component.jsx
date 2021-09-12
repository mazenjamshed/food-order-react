import React from 'react';
import './Navbar.styles.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__logo'>Food App</div>
      <div className='navbar__cart'>Cart btn</div>
    </div>
  );
};

export default Navbar;

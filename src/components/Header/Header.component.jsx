import React, { Fragment } from 'react';

import './Header.styles.scss';

const Header = () => {
  return (
    <Fragment>
      <div className='header'>
        <div className='bg-img'></div>
        <div className='textbox'>
          <h1 className='textbox__heading'>Delicious Food,Delivered to you</h1>
          <p className='textbox__content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            delectus sit culpa omnis porro eum quasi cumque expedita placeat
            recusandae ratione quam sequi, vero eos quia eveniet magnam quidem
            exercitationem.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;

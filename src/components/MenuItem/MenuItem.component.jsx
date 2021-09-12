import React, { Fragment } from 'react';
import './MenuItem.styles.scss';

const MenuItem = ({ items }) => {
  return (
    <Fragment>
      {items.map((item) => (
        <div className='menu-item'>
          <div className='menu-item__details'>
            <div className='menu-item__name'>{item.name}</div>
            <div className='menu-item__ingredients'>{item.ingredients}</div>
            <div className='menu-item__price'>{item.price}</div>
          </div>
          <div className='menu-item__amount'>
            <div className='menu-item__qty'>QTY</div>
            <button className='menu-item__btn'>ADD</button>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default MenuItem;

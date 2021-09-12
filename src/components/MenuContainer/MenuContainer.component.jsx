import React, { useState } from 'react';
import MenuItem from '../MenuItem/MenuItem.component';

import './MenuContainer.styles.scss';

const menuItems = [
  { name: 'Sushi', ingredients: 'Finest fish and veggies', price: 22.99 },
  { name: 'Burger', ingredients: 'Bun and Chicken', price: 22.99 },
  { name: 'Pizza', ingredients: 'Tikka pieces', price: 22.99 },
  { name: 'Tikka', ingredients: 'Fresh Chicken', price: 22.99 },
  { name: 'Mutton', ingredients: 'Finest Mutton of Lahore ', price: 22.99 },
];

const MenuContainer = () => {
  const [items] = useState(menuItems);

  return (
    <div className='menu-container'>
      <MenuItem items={items} />
    </div>
  );
};

export default MenuContainer;




import React, { useState } from 'react';
import './hoverMenu.module.scss';

const HoverMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menus = [
    {
      id: 1,
      label: 'Menu 1',
      submenuItems: ['Submenu Item 1', 'Submenu Item 2'],
    },
    {
      id: 2,
      label: 'Menu 2',
      submenuItems: ['Submenu Item 3', 'Submenu Item 4'],
    },
    {
      id: 3,
      label: 'Menu 3',
      submenuItems: ['Submenu Item 5', 'Submenu Item 6'],
    },
  ];

  const handleMenuMouseEnter = (menuId) => {
    setActiveMenu(menuId);
  };

  const handleMenuMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div className="navbar">
      {menus.map((menu) => (
        <div
          key={menu.id}
          className={`menu-item ${activeMenu === menu.id ? 'active' : ''}`}
          onMouseEnter={() => handleMenuMouseEnter(menu.id)}
          onMouseLeave={handleMenuMouseLeave}
        >
          {menu.label}
          {activeMenu === menu.id && (
            <div className="submenu">
              {menu.submenuItems.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HoverMenu;

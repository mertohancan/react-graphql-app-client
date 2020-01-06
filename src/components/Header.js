import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const path = location.pathname === '/' ? 'home' : location.pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu pointing secondary>
      <Menu.Item
        name="home"
        active={activeItem === 'home'}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />

      <Menu.Menu position="right">
        <Menu.Item
          name="login"
          active={activeItem === 'login'}
          onClick={handleItemClick}
          as={Link}
          to="/login"
        />

        <Menu.Item
          name="register"
          active={activeItem === 'register'}
          onClick={handleItemClick}
          as={Link}
          to="register"
        />
      </Menu.Menu>
    </Menu>
  );
};

export default Header;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../../static/data';
import styles from '../../styles/styles';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className={`block 800px:${styles.noramlFlex}`}>
      {navItems &&
        navItems.map((item, index) => (
          <div className="flex" key={index}>
            <Link
              to={item.url}
              className={`${
                location.pathname === item.url
                  ? 'text-black scale-105'
                  : 'text-black 800px:text-[#fff]'
              } pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer transition-all hovered-link `}
            >
              {item.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;

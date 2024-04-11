import React from 'react'
import './Header.css'
import NavListitem from '../components/NavListitem'
import navListData from '../data/navListData';

const Header = () => {
  return (
    <header>
      <a href="/" className="logo">
        MovieZone
      </a>
      <ul className="nav">
        {
        navListData.map(nav => (
             <NavListitem nav={nav} />
        ))
        }
      </ul>
    </header>
  );
}

export default Header
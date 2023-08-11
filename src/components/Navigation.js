import React from 'react';
import { Link } from 'react-router-dom';
import myicon from '../assets/person-icon.png';

function Navigation() {
  return (
    <nav className="panel-bg">
      <ul>
        <h1 className="Bookstore-CMS">Bookstore CMS</h1>
        <li className="Books">
          <Link to="/">BOOKS</Link>
        </li>
        <li className="Categories">
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
      <div className="circle">
        <img src={myicon} alt="icon" className="icon" />
      </div>
    </nav>
  );
}

export default Navigation;

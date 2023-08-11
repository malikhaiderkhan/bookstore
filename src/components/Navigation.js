import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="panel-bg">
      <ul>
        <h1 className="Bookstore-CMS">Bookstore CMS</h1>
        <li className="Books">
          <Link to="/">Books</Link>
        </li>
        <li className="Categories">
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

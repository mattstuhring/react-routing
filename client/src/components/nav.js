import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <nav>
      <Link to="/">
        <h3>Logo</h3>
      </Link>
      <ul className="nav-links">
        <Link to="/review">
          <li>Review</li>
        </Link>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;

import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
      <div className='navbar navbar-expand-sm navbar-dark bg-dark'>
          <div className="container">
              <h1 className='me-5 text-white'>Quotes central</h1>
              <div className='collapse navbar-collapse'>
                  <ul className="navbar-nav mr-auto">
                      <li className='nav-item me-3'><NavLink to="/" className="nav-link">All quotes</NavLink></li>
                      <li className='nav-item me-3'><NavLink to="/add-quote" className="nav-link">New Quote</NavLink></li>
                  </ul>
              </div>
          </div>
      </div>
  );
};

export default NavBar;
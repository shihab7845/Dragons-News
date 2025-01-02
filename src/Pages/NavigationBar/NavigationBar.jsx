import React from 'react';
import { Link } from 'react-router-dom';
import user from '../../assets/user.png'; 

export default function NavigationBar() {
  return (
    <div className="navbar bg-base-100 w-11/12 mx-auto">
      <div className="navbar-start">
        {/* Add content here */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/career">Career</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="w-10 rounded-full">
          <img
            alt="User avatar"
            src={user}
          />
        </div>
        <Link to="/login" className="btn w-24 mx-3 text-xl">
          Login
        </Link>
      </div>
    </div>
  );
}

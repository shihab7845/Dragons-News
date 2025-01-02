import React from 'react';
import logo from '../../assets/logo.png';
import moment from 'moment';

export default function Header() {
  return (
    <div className="space-y-3">
      <img className="mx-auto" src={logo} alt="" />
      <p className="text-center">Journalism Without Fear or Favour</p>

      {/* Displaying time and date */}
      <div className="text-center">
        {moment().format('MMMM Do YYYY, h:mm:ss a')} 
      </div>
    </div>
  );
}  

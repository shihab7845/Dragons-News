import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import user from '../../assets/user.png';
import { AuthContext } from '../AuhtProvider/AuthProvider';
import Auth from '../../fairebase.inits';
import { signOut } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NavigationBar() {
  const { User } = useContext(AuthContext);

  const handleLogout = () => {
    signOut(Auth)
      .then(() => {
        toast.success('Logout successful');
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
      });
  };

  return (
    <>
      <div className="navbar bg-base-100 w-11/12 mx-auto">
        <div className="navbar-start"></div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><button onClick={handleLogout}>LogOut</button></li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="w-10 rounded-full">
            <img alt="User avatar" src={user} />
          </div>
          {User ? (
            <Link>
              <button className="btn w-24 mx-3 text-xl">{User.displayName}</button>
            </Link>
          ) : (
            <Link to="/registration" className="btn w-24 mx-3 text-xl">
              Register
            </Link>
          )}
        </div>
      </div>
      
      <ToastContainer />
    </>
  );
}

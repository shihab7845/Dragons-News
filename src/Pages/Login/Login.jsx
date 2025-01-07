import React, { useContext } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import { AuthContext } from '../AuhtProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';



export default function Login() {
   const { LoginUser } = useContext(AuthContext);
   const location = useLocation()
   console.log(location);
   
   const navigate = useNavigate();

   const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name')
    const email = form.get('email')
    const password = form.get('password')
    console.log(name, email, password);

    LoginUser(email, password)
      .then((result) => {
         const User =  result.user;
        console.log(User);
        navigate(location?.state ? location.state : "/")
      })
      .catch((error) => {
        console.error(error);
      });



  }


  return (

    <div>
      <NavigationBar></NavigationBar>

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <h1 class="text-4xl font-bold text-blue-500">Login Here</h1>

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

            <form onSubmit={handleSubmit} className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' laceholder="email" className="input input-bordered" required />
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>

              
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>


  )
}

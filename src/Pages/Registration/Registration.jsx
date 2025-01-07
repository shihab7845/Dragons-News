import React, { useContext } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import { AuthContext } from '../AuhtProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';

export default function Registration() {
  const { CreateUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name')
    const email = form.get('email')
    const password = form.get('password')
    console.log(name, email, password);

    CreateUser(email, password)
      .then((result) => {
        const User = result.user;

        updateProfile(User, {
          displayName: name
        })
          .then()
          .catch((error) => {
            console.error(error);
          })
        console.log(User);
      })
      .catch((error) => {
        console.error(error);
      })



  }






  return (
    <div>
      <NavigationBar />
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <h1 className="text-4xl font-bold text-blue-500">Register Here</h1>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name='name'
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name='email'
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name='password'
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

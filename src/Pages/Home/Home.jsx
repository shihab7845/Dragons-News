import React from 'react'
import Header from '../Header/Header'
import NavigationBar from '../NavigationBar/NavigationBar'
import BreakingNews from '../BreakingNews/BreakingNews'
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import swimming from '../../assets/swimming.png'
import classes from '../../assets/class.png'
import playGround from '../../assets/playground.png'
import BackGround from '../../assets/bg.png'
import LeftSideDiv from '../LeftSideDiv/LeftSideDiv';

export default function Home() {
  return (
    <div className='border border-green-800 w-full mx-auto'>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <NavigationBar></NavigationBar>
      <div className='grid grid-cols-4 gap-3'>


        {/* Left side Div */}
        <div className='col-span-1 border border-yellow-300 '>

       <LeftSideDiv></LeftSideDiv>


        </div>


        {/* Centre Div */}
        <div className='col-span-2 border border-yellow-300 '><h1>Centre div</h1></div>



        {/* Right side Div */}
        <div className='col-span-1 border border-yellow-300 '>

          {/* Login with button section */}
          <div className="space-y-4 mx-auto w-full max-w-sm">
            <h1 className="text-lg font-semibold text-center">Login with</h1>
            <div className=" mx-auto flex justify-center items-center border border-green-700 w-5/6 rounded p-2 space-x-3">
              <FaGoogle className="text-blue-500 text-2xl" />
              <button className="w-1/2 text-blue-600 py-1 rounded hover:bg-green-700 hover:text-white focus:outline-none text-sm">
                Login with Google
              </button>
            </div>
            <div className="mx-auto flex justify-center items-center border border-green-700 rounded w-5/6 p-2 space-x-3">
              <FaGithub className="text-gray-800 text-2xl" />
              <button className="w-1/2 text-black py-1 rounded hover:bg-green-700 hover:text-white focus:outline-none text-sm">
                Login with Github
              </button>
            </div>
          </div>

          {/* find us on section */}
          <div className="space-y-4 mt-11 mx-auto w-full max-w-sm text-center">
            <h1 className="text-lg font-semibold">Find Us on</h1>
            <div className="flex items-center justify-center space-x-2 text-blue-500 hover:text-blue-700">
              <FaTwitter className="text-2xl" />
              <a href="#" className="text-sm font-medium">Twitter</a>
            </div>
            <div className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-800">
              <FaFacebook className="text-2xl" />
              <a href="#" className="text-sm font-medium">Facebook</a>
            </div>
            <div className="flex items-center justify-center space-x-2 text-pink-500 hover:text-pink-700">
              <FaInstagram className="text-2xl" />
              <a href="#" className="text-sm font-medium">Instagram</a>
            </div>
          </div>

          {/* Q-zone */}
          <div className="bg-gray-100 p-6 rounded-lg m-10 shadow-md space-y-4">
            <h1 className="text-2xl font-bold text-center text-gray-800">Q-Zone</h1>
            <div className="flex flex-col items-center space-y-6">
              <img src={swimming} alt="Swimming Pool" className="w-64 h-64 object-cover rounded-lg shadow-lg" />
              <img src={classes} alt="Classes" className="w-64 h-64 object-cover rounded-lg shadow-lg" />
              <img src={playGround} alt="Playground" className="w-64 h-64 object-cover rounded-lg shadow-lg" />
            </div>
          </div>

          <div className=''>
            <img className='mx-auto' src={BackGround} alt="" />
          </div>





        </div>


      </div>
    </div>
  )
}

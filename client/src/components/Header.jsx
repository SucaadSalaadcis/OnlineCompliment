import React from 'react'

import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
    <div>

      <div className="text-white flex justify-between text-[30px] mt-[15px] pl-[15px] bg-purple-800">
        <h1 className="text-red-100">Online Compliment</h1>
        <ul className="text-white flex gap-[20px] list-none mr-[30px] cursor-pointer mt-[15px]">
         <Link to={"/home"}><li>Home</li></Link> 
          <Link to={"/about"}><li>About </li></Link>
          <Link to={"/services"}><li>Services</li></Link> 
          <Link to={"/"}><li>Logout </li></Link> 
        </ul>
      </div>
      </div>  

    </>
  )
}

export default Header
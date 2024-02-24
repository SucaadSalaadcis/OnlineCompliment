import React from 'react'
import Header from './Header'
import img1 from "../../src/imges/1.png"
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
      <Header />
      <div className="flex md:mt-[100px]">
        <div className="w-3/5 mt-[60px]">
          <p className="font-bold md:text-4xl md:ml-[80px] ml-[30px] text-lg">Hope , Healing , Help</p>
          <p className="md:ml-[80px] mt-3 md:text-xl text-lg ml-[30px] "> Please remeber
            <br />That you are not alone ... <br /> We are always here for you </p>
         <Link to={"/addcomp"}><button className='md:block md:border-1 text-md bg-purple-800
           ml-[80px] md:ml-[80] mt-[20px] md:font-semibold text-white shadow-md shadow-black rounded px-6  p-1.5'>Add Your Complaint</button></Link> 
        </div>

        <div className="w-2/5">
          <img src={img1} width="400px" alt="" class="mt-[90px] sm:mt-[0px] rounded-full" />
        </div>

      </div>
    </div>
  )
}

export default Home
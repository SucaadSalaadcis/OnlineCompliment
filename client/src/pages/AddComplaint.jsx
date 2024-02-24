import React, { useState } from 'react'
import axios from "axios"
import Header from '../components/Header';
// import {useNavigate} from "react-router-dom"

function AddComplaint() {

    const [complient,setComplient] = useState("");
 

    // const navigate = useNavigate();

    const handlePost = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/createUser",{
            "complient": complient,
        }).then(()=>{
            alert("Your Complients Has Been Sent..");
            setComplient(" ");
            console.log(complient);
        }).catch((error)=> console.log(error));
    }
  return (
    <div>
        <Header/>
        <h1 className='ml-[540px] text-xl mt-[80px] font-bold'>Enter You Complients Here</h1>
        <div  class="shadow-xl shadow-gray border-neutral-600 bg-purple-800 w-[350px] h-[230px] absolute left-[410px] top-[217px] ml-20">
            <div class="p-10">
          
            <form>
            <textarea placeholder='Enter Your Complients Here...' value={complient} onChange={(e) => setComplient(e.target.value)} className='border-2 border-purple-700 ml-2 rounded-lg w-[250px] h-[150px]'></textarea>
                 <br /> 

                </form> 
                <div class="flex justify-between mt-12">
                <button onClick={handlePost} className='text-white ml-[69px] bg-purple-800 px-10 py-2  rounded-md'>Send</button>

                </div>
            </div>
            </div>
    </div>
  )
}

export default AddComplaint
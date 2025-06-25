import React from 'react'
import { useState } from 'react';
import UploadProducts from '../Pages/UploadProducts'
import { Bell } from 'lucide-react';

const Navbar = () => {
   


  
  return (
     <div className="bg-white shadow-md  p-5 flex items-center justify-between ">
        <div className="flex items-center gap-3">

         
        </div>
        
        
        <div className="w-1/2  max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
         <div className="relative">
        <button className="relative text-gray-700 hover:text-green-600 focus:outline-none">
          <Bell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>
      </div>
        <div className="flex  items-center gap-4">
          <div className=" text-right ">
            <div className=" font-medium ">Joseph</div>
            <div className="text-xs text-gray-500 ">Admin</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-800">
            j
          </div>
        </div>
      
        
           
      
    </div>
  )
}

export default Navbar
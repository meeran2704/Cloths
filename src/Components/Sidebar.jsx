// src/pages/Dashboard.jsx
import { NavLink , useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Eye, LayoutDashboard, LogOutIcon, Megaphone, ShoppingCart, Truck, Upload, Wallet, Warehouse } from 'lucide-react';

import { Menu, X } from "lucide-react";


export default function Sidebar({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };
    const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    
    <div className="min-h-screen flex">
      {/* Toggle Button (Mobile) */}
      <button
        onClick={toggleSidebar}
        className=" p-2 m-2 text-green-600"
      >
        {open ? <X /> : <Menu />}
      </button>
      
       {/* Sidebar */}
      <aside
        className={`${
          open ? "w-64" : "w-0"
        } transition-all duration-300 bg-white min-h-screen hidden md:block`}
      >
         
      
      {/* <div className="w-64 bg-white h-screen fixed top-0 left-0 shadow"> */}
    
    <div className="p-4 text-2xl font-bold text-green-800">.cloths</div>
     
           <nav className=" p-4 space-y-2">
      <ul>
     
     <li> <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center gap-3 p-2 rounded hover:bg-green-100 ${
            isActive ? 'bg-green-100 text-green-700 font-semibold' : ''
          }`
        }
      >
        <LayoutDashboard size={20} />
        Dashboard
      </NavLink></li>

          <li>  <NavLink
        to="/upload-products"
        className={({ isActive }) =>
          `flex items-center gap-3 p-2 rounded hover:bg-green-100 ${
            isActive ? 'bg-green-100 text-green-700 font-semibold' : ''
          }`
        }
      >
         <Upload size={20} /> 
        UploadProducts
        
      </NavLink></li>
        <li>   <NavLink
        to="/orders"
        className={({ isActive }) =>
          `flex items-center gap-3 p-2 rounded hover:bg-green-100 ${
            isActive ? 'bg-green-100 text-green-700 font-semibold' : ''
          }`
        }
      >
         <ShoppingCart size={20} /> 
        Orders
      </NavLink></li>
      <li> <NavLink
        to="/delivery-tracking"
        className={({ isActive }) =>
          `flex items-center gap-3 p-2 rounded hover:bg-green-100 ${
            isActive ? 'bg-green-100 text-green-700 font-semibold' : ''
          }`
        }
      >
         <Truck size={20} /> 
        Delivery Tracking
      </NavLink></li>
      <li><NavLink
        to="/stock"
        className={({ isActive }) =>
          `flex items-center gap-3 p-2 rounded hover:bg-green-100 ${
            isActive ? 'bg-green-100 text-green-700 font-semibold' : ''
          }`
        }
      >
         <Warehouse size={20} /> 
        Stocks
      </NavLink></li>
      <li><NavLink
        to="/expenses"
        className={({ isActive }) =>
          `flex items-center gap-3 p-2 rounded hover:bg-green-100 ${
            isActive ? 'bg-green-100 text-green-700 font-semibold' : ''
          }`
        }
      >
         <Wallet size={20} /> 
        Expenses
      </NavLink></li>
      <li><NavLink
        to="/review"
        className={({ isActive }) =>
          `flex items-center gap-3 p-2 rounded hover:bg-green-100 ${
            isActive ? 'bg-green-100 text-green-700 font-semibold' : ''
          }`
        }
      >
         <Eye size={20} /> 
        Review & Rating
      </NavLink></li>
      <li><NavLink
        to="/ads"
        className={({ isActive }) =>
          `flex items-center gap-3 p-2 rounded hover:bg-green-100 ${
            isActive ? 'bg-green-100 text-green-700 font-semibold' : ''
          }`
        }
      >
         <Megaphone size={20} /> 
        Advertisement
      </NavLink></li>

      <hr />

       
        
       <li> <NavLink
        to="/login"
        // onClick={logout}
         onClick={handleLogout}
        className={({ isActive }) =>
          `flex items-center gap-3 p-2 rounded  text-red-600 cursor-pointer ${
            isActive ? 'bg-green-100 text-green-700 font-semibold' : ''
          
          }`
          }>
            <LogOutIcon size={20}/>
          
        Log Out
        </NavLink></li>
        </ul>
     
        
    </nav> 
      

       </aside>

    </div>
  );
}

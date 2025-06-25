import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import UploadProducts from "../Pages/UploadProducts";
import Orders from "../Pages/Orders";
import Stocks from "../Pages/Stocks/AddStock";
import DeliveryTable from "../Pages/DeliverytTracking/DeliveryTable";
import EnterTrackingId from "../Pages/DeliverytTracking/EnterTrackingId";
import InvoicePage from "../Components/Invoicemodel";
import ExpensesPage from "../Pages/Expenses";
import ReviewsPage from "../Pages/Review";
import AdvertisementPage from "../Pages/Advertisement";
import DashboardPage from '../Components/DashboardPage'


export default function MainLayout({setIsAuthenticated }) {
  //  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1  min-h-screen bg-green-100">
        <Navbar setIsAuthenticated={setIsAuthenticated} />
        <div className="p-6">
         <Outlet/>
         
         <Routes>
                  <Route path="/" element={<DashboardPage/>}/>
                  <Route path="/upload-products" element={<UploadProducts />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/delivery-tracking" element={<DeliveryTable />} />
                  <Route path="/delivery-tracking/:id" element={<EnterTrackingId />} />
                  <Route path="/stock" element={<Stocks />} />
                  <Route path="/invoice/:orderId" element={<InvoicePage />} />
                  <Route path="/expenses" element={<ExpensesPage />} />
                  <Route path="/review" element={<ReviewsPage />} />
                  <Route path="/ads" element={<AdvertisementPage />} />
         </Routes>
          
        </div>
        
      </div>
    </div>
  )
}

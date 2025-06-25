// src/App.jsx
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import ProtectedRoute from "./Components/ProtectedRoute";
import UploadProducts from "./Pages/UploadProducts";
import Orders from "./Pages/Orders";
import Stocks from "./Pages/Stocks/AddStock";
import DeliveryTable from "./Pages/DeliverytTracking/DeliveryTable";
import EnterTrackingId from "./Pages/DeliverytTracking/EnterTrackingId";
import InvoicePage from "./Components/Invoicemodel";
import ExpensesPage from "./Pages/Expenses";
import ReviewsPage from "./Pages/Review";
import AdvertisementPage from "./Pages/Advertisement";
import DashboardPage from "./Components/DashboardPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MainLayout from "./Layout/MainLayout";




// const isAuthenticated = localStorage.getItem("auth")
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    
        <BrowserRouter>

        {/* <MainLayout/> */}

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route
            path="/*"
            element={
        
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <MainLayout setIsAuthenticated={setIsAuthenticated} />
              </ProtectedRoute>
            }
          />

        </Routes>
     
  </BrowserRouter>

  










  )
}

export default App;

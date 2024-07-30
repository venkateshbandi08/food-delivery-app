import React from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/add/Add";
import List from "./pages/list/List";
import Orders from "./pages/orders/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const baseUrl = "https://food-delivery-app-q403.onrender.com";
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add baseUrl={baseUrl} />} />
          <Route path="/list" element={<List baseUrl={baseUrl} />} />
          <Route path="/Orders" element={<Orders baseUrl={baseUrl} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

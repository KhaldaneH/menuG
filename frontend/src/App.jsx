import React from "react";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LanguageProvider } from "./Context/LanguageContext"; // Import Language Context

const App = () => {
  return (
    <LanguageProvider> {/* Wrap the entire app */}
      <ToastContainer />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </LanguageProvider>
  );
};

export default App;

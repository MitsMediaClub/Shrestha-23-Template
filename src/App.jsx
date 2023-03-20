import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Mid from "./components/Mid";
import About from "./components/About";
import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import Events from "./components/Events";
import Description from "./components/Description";
import Loading from "./components/Loading";
import ELCamino from "./components/ELCamino";
import React, { useState, 
  useEffect
   } from 'react';

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000)
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
            
            <div className="flex flex-col bg-blue-400  pb-0 overflow-y-auto pb-0 radial sm:px-0 sm:w-full sm:overflow-x-hidden sm:scrollbar scrollbar overflow-x-hidden relative">
              <Navbar />
              <Intro />
              <Mid />
              <Footer />
            </div>
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div className="h-screen flex flex-col bg-blue-400  px-20 overflow-y-auto pb-12 radial sm:px-0 sm:pb-5">
              <Navbar />
              <div className="flex items-center">
                <About />
              </div>
            </div>
          }
        />
        <Route
          path="/schedule"
          element={
            <div className="h-full flex flex-col bg-blue-400  overflow-y-auto pb-0 radial  sm:w-full sm:overflow-x-hidden sm:scrollbar">
              <Navbar />
              <Events />
            </div>
          }
        />
        <Route
          path="/desc/:no"
          element={
            <div className="h-full flex flex-col bg-blue-400  overflow-y-auto pb-0 radial  sm:w-full sm:overflow-x-hidden sm:scrollbar overflow-x-hidden">
              <Navbar /> <Description />
            </div>
          }
        />
        <Route
          path="/elcamino"
          element={
            <div className="h-full flex flex-col bg-blue-400  overflow-y-auto pb-0 radial  sm:w-full sm:overflow-x-hidden sm:scrollbar overflow-x-hidden">
              <Navbar /> <ELCamino />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

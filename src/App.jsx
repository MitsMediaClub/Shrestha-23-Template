import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Mid from "./components/Mid";
import About from "./components/About";
import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import Events from "./components/Events";
import Gaming from "./components/Gaming";
import Description from "./components/Description";
import Loading from "./components/Loading";
import ELCamino from "./components/ELCamino";
import React, { useState, useEffect } from "react";
import Support from "./components/Support";
import Rules from "./components/Rules";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);
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
            <div className="h-screen flex flex-col bg-blue-400 overflow-y-auto pb-12 radial sm:px-0 sm:pb-5">
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
            <div className="h-screen flex flex-col bg-blue-400  overflow-y-auto pb-0 radial  sm:w-full sm:overflow-x-hidden sm:scrollbar">
              <Navbar />
              <Events />
            </div>
          }
        />
        <Route
          path="/nexus"
          element={
            <div className="h-screen flex flex-col bg-blue-400  overflow-y-auto pb-0 radial  sm:w-full sm:overflow-x-hidden sm:scrollbar">
              <Navbar />
              <Gaming />
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
            <div className="h-screen flex flex-col bg-blue-400  overflow-y-auto pb-0 radial  sm:w-full sm:overflow-x-hidden sm:scrollbar overflow-x-hidden">
              <Navbar />
              <ELCamino />
            </div>
          }
        />
        <Route
          path="/support"
          element={
            <div className="h-screen flex flex-col bg-blue-400  overflow-y-auto pb-0 radial  sm:w-full sm:overflow-x-hidden sm:scrollbar overflow-x-hidden">
              <Navbar />
              <Support />
            </div>
          }
        />
        <Route
          path="/rules"
          element={
            <div className="h-screen flex flex-col bg-blue-400  overflow-y-auto pb-0 radial  sm:w-full sm:overflow-x-hidden sm:scrollbar overflow-x-hidden">
              <Navbar />
              <Rules />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

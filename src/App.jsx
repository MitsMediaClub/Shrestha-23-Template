import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Mid from "./components/Mid";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Events from "./components/Events";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col bg-blue-400  pb-0 overflow-y-auto pb-0 radial sm:px-0 sm:w-full sm:overflow-x-hidden sm:scrollbar scrollbar overflow-x-hidden relative">
              <Navbar />
              <Intro />
              <Mid />
              <Footer />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div className="h-screen flex flex-col bg-blue-400  px-20 overflow-y-auto pb-12 radial">
              <Navbar />
              <About />
            </div>
          }
        />
        <Route
          path="/schedule"
          element={
            <div className="flex flex-col bg-blue-400  overflow-y-auto pb-0 radial sm:px-5 sm:w-full sm:overflow-x-hidden sm:scrollbar">
              <Navbar />
              <Events />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

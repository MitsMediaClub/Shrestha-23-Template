import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Mid from "./components/Mid";
import Schedule from "./components/Schedule";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col bg-blue-400  px-20 overflow-y-auto pb-12 radial">
              <Navbar />
              <Intro />
              <Mid />
              <Footer />
            </div>
          }
        />
        <Route
          path="/schedule"
          element={
            <div className="h-screen flex flex-col bg-blue-400  px-20 overflow-y-auto pb-12 radial">
              <Navbar />
              <Schedule />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

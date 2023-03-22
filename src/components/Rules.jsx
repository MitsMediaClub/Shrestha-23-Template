import React from "react";
import { Link } from "react-router-dom";

const Rules = () => {
  return (
    <div className="h-screen mt-20 mx-20 sm:mx-2">
      <h1 className="drummer text-3xl text-white border-b-2 p-4 w-1/2 mb-10 sm:w-full">
        RULES AND REGULATIONS
      </h1>
      <div>
        
      </div>
      <Link to="/schedule">
        <button className="text-white rounded-lg drummer mx-auto  p-2 border-white-2 bg-opacity-70 border-white/30 border text-sm backdrop-blur bg-white/10 mb-10">
          Next
        </button>
      </Link>
    </div>
  );
};

export default Rules;

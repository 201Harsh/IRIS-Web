import React from "react";
import Header from "../Components/Header";

const IRIS = () => {
  return (
    <>
      <div className="w-full h-screen bg-black">
        <Header />
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-white">IRIS</h1>
        </div>
      </div>
    </>
  );
};

export default IRIS;

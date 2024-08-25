import React, { useState } from "react";
import DirectoryA from "../DirectoryA/DirectoryA";
import DirectoryB from "../DirectoryB/DirectoryB";

function Root() {
  const [component1, setComponent1] = useState();
  const [component2, setComponent2] = useState();

  const showdirectoryA = () => {
    setComponent1(<DirectoryA />);
  };

  const showdirectoryB = () => {
    setComponent2(<DirectoryB />);
  };


  return (
    <div className="w-full bg-slate-100 h-full">
      <h1 className="text-2xl text-black font-bold">Root</h1>
      <div className="m-4">
        <div className="m-2">
          <button
            className="text-xl text-gray-900 hover:border-4 border-gray-700 rounded-lg"
            onClick={showdirectoryA}
          >
            Directory A
          </button>
          <h3>delete</h3>
          <h3>details</h3>
        </div>
        <div className="m-2">
          <button className="text-xl text-gray-900 hover:border-4 border-gray-700 rounded-lg" onClick={showdirectoryB}>
            Directory B
          </button>
          <h3>delete</h3>
          <h3>details</h3>
        </div>
      </div>
      <div className="mb-10 flex justify-evenly">
      {component1}
      {component2}
      </div>

      
    </div>
  );
}

export default Root;

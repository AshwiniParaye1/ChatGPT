import React from "react";
import ChatBody from "./components/ChatBody";

const App = () => {
  return (
    <>
      <div className="bg-[#1A232E] h-screen py-6 relative sm:px-28 text-white overflow-hidden flex flex-col justify-between align-middle">
        <div className="gradient-01 z-0 absolute"></div>
        <div className="gradient-02 z-0 absolute"></div>

        {/* header */}
        <div className="uppercase font-bold text=2xl text-center mb-3">
          ChatGpt 2.0
        </div>

        {/* body */}
        <div className="h-[90%]  overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center">
          <ChatBody />
        </div>

        {/* input */}
        <div>Input</div>
      </div>
    </>
  );
};

export default App;

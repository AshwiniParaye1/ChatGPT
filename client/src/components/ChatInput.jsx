import React from "react";

const ChatInput = () => {
  return (
    <div className="w-full bg-white bg-opacity-10 max-h-40 rounded-lg py-4 overflow-auto relative">
      <textarea
        className="border-0 bg-transparent outline-none w-11/12"
        rows={1}
      />
      <img
        src="./send.png"
        alt="send-button"
        width={20}
        className="absolute right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125 top-4"
      />
    </div>
  );
};

export default ChatInput;

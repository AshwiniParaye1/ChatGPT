import React, { useState } from "react";

const ChatInput = ({ sendMessage }) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value === "") return;
    sendMessage({ sender: "user", message: value });
    setValue("");
  };

  // console.log(value);

  return (
    <div className="w-full bg-white bg-opacity-10 max-h-40 rounded-lg py-4 px-4 overflow-auto relative">
      <textarea
        onKeyDown={(e) => {
          e.keyCode === 13 && e.shiftKey === false && handleSubmit();
        }}
        className="border-0 bg-transparent outline-none w-11/12"
        rows={1}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <img
        onClick={handleSubmit}
        src="./send.png"
        alt="send-button"
        width={20}
        className="absolute right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125 top-4"
      />
    </div>
  );
};

export default ChatInput;

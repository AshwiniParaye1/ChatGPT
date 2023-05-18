import React from "react";

const ChatBody = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* user msg */}
      <div className="border-[#999999] break-words border-2 rounded-xl self-end px-3 max-w-[80%]">
        <pre>
          <span>Hey, can you help me?</span>
        </pre>
      </div>
      {/* ai msg */}
      <div>
        <pre>
          <span>Yes, sure!</span>
        </pre>
      </div>
    </div>
  );
};

export default ChatBody;

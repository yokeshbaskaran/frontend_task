import { MdOutlineAttachFile } from "react-icons/md";
import { LuSend } from "react-icons/lu";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";

export const ChatBox = () => {
  const [userInput, setUserInput] = useState<string>("");
  const { sendMessage } = useAppContext();

  const handleSendmsg = () => {
    if (!userInput.trim()) return;
    sendMessage(userInput);
    setUserInput("");
    console.log("text is sent");
  };

  return (
    <div className="px-5 flex flex-col items-center">
      <div className="w-[85%] px-2 py-2 border border-[#9D9E9E] rounded-lg">
        <div className="flex items-center">
          <span>
            <MdOutlineAttachFile size={20} />
          </span>

          <div className="w-full px-2 text-[#8C8D8E]">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Chat with me!"
              className="w-full px-2 outline-0 text-black"
            />
          </div>

          <button
            onClick={handleSendmsg}
            className="ml-auto p-2 bg-[#E5E7EB] rounded"
          >
            <LuSend color="#8C8D8E" size={18} />
          </button>
        </div>
        <p className="pt-2 text-[#8C8D8E]">
          Press Enter to send, Shift+Enter for new line
        </p>
      </div>

      {/* Disclaimer  */}
      <span className="my-2 text-sm">
        AI can make mistakes. Consider checking important information.
      </span>
    </div>
  );
};

export const ContentBox = () => {
  const instructions = [
    { title: "Code Help", usage: "Debug and write better code" },
    { title: "Explanations", usage: "Understand complex topics" },
    { title: "Creative Writing", usage: "Generate content and ideas" },
    { title: "Problem Solving", usage: "Find solutions to challenges" },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="px-2">
        <img src="/icon.png" alt="logo" width={120} height={120} />
      </div>

      <div className="py-2">
        <h2 className="pl-1 text-2xl font-bold text-center cursor-pointer">
          <span className="text-[#00A832]">Daiv</span>AI
        </h2>
        <p className="text-[#747474] py-1">
          Ask me anything. I'm here to help.
        </p>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 max-w-2xl mx-auto">
        {instructions.map((help, idx) => (
          <div
            key={idx}
            className="p-4 border border-gray-200 rounded-xl hover:border-green-500 transition-colors bg-[#F1F3F5] shadow-sm cursor-pointer"
          >
            <h2 className="text-center">{help.title}</h2>
            <p className="text-[#9D9E9E]">{help.usage}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

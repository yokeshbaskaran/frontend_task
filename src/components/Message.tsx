import { FaRegUser } from "react-icons/fa6";
import { useAppContext } from "../context/AppContext";

const Message = () => {
  const { chats, activeChatID, formatTime } = useAppContext();

  const activeChat = chats.find((c) => c.id === activeChatID);

  // console.log("active chats", activeChat);

  if (!activeChat) {
    return <div className="text-center mt-10">Start a new chat 🚀</div>;
  }

  return (
    <div className="mt-1 mb-5 flex flex-col">
      {activeChat.messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex items-start gap-2 px-3 py-5 transition-colors cursor-pointer ${
            msg.sender === "user"
              ? "bg-white hover:bg-[#F8F9FA]"
              : "bg-gray-100 hover:opacity-88"
          }`}
        >
          {/* Avatar */}
          {msg.sender === "user" ? (
            <div className="px-2 py-2 bg-[#E5E7EB] rounded">
              <FaRegUser size={20} />
            </div>
          ) : (
            <img src="/icon.png" alt="AI" className="size-8 mx-1" />
          )}

          {/* Content */}
          <div className="px-2 pl-3 flex flex-col">
            <div className="flex items-center gap-5">
              <h2 className="text-sm text-[#747474] font-bold">
                {msg.sender === "user" ? "You" : "AI Model"}
              </h2>

              {/* Fake timestamp (you can improve later) */}
              <span className="text-[#747474] text-sm">
                {formatTime(msg.createdAt)}
              </span>
            </div>

            <span className="pt-2 text-black text-lg whitespace-pre-wrap">
              {msg.text}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Message;

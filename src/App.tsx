import "./App.css";
import { ChatBox, ContentBox } from "./contents/Homepage/HomeContent";
import Navbar from "./contents/Homepage/Navbar";
import Sidebar from "./contents/NavContents/Sidebar";
import Message from "./components/Message";
import { useAppContext } from "./context/AppContext";

const App = () => {
  const { sidebar, chats, activeChatID } = useAppContext();

  const activeChat = chats.find((c) => c.id === activeChatID);
  const hasMessages = (activeChat?.messages?.length ?? 0) > 0;

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      {/* Sidebar */}
      <div className={`w-64 ${sidebar ? "hidden" : "md:flex"} flex-col`}>
        <Sidebar />
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col h-full">
        <Navbar />

        {/* Chat */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Messages  */}
          <div className="flex-1 overflow-y-auto px-2">
            {hasMessages ? <Message /> : <ContentBox />}
          </div>

          {/* ChatBox  */}
          <div className="border-t border-[#f0f0f0] bg-white p-3">
            <ChatBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

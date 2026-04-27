import { createContext, useContext, useEffect, useState } from "react";

type AppContextType = {
  sidebar: boolean;
  onClickSideBar: () => void;
  userText: string;
  setUserText: React.Dispatch<React.SetStateAction<string>>;
  createNewChat: () => void;
  sendMessage: (text: string) => Promise<void>;
  chats: NewChatType[];
  activeChatID: number | null;
  setActiveChatID: (id: number) => void;
  loading: boolean;
};

type AppContextProps = {
  children: React.ReactNode;
};

type MessageType = {
  id: number;
  text: string;
  sender: "user" | "ai";
};

type NewChatType = {
  id: number;
  title: string;
  messages: MessageType[];
};

const AppContext = createContext({} as AppContextType);

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }: AppContextProps) => {
  const [sidebar, setSidebar] = useState(true);
  const [userText, setUserText] = useState("");
  const [loading, setLoading] = useState(false);

  const onClickSideBar = () => setSidebar((prev) => !prev);

  const [chats, setChats] = useState<NewChatType[]>(() => {
    const stored = localStorage.getItem("chats");
    return stored ? JSON.parse(stored) : [];
  });

  const [activeChatID, setActiveChatID] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("chats", JSON.stringify(chats));
  }, [chats]);

  const createNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: "New Chat",
      messages: [],
    };

    setChats((prev) => [...prev, newChat]);
    setActiveChatID(newChat.id);
  };

  // API CALL (returns AI text)
  const query = async (text: string): Promise<string> => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://router.huggingface.co/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GEMINI_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: [{ role: "user", content: text }],
            model: "deepseek-ai/DeepSeek-V4-Pro:novita",
          }),
        },
      );

      const result = await response.json();
      const data = result?.choices?.[0]?.message?.content;
      console.log("data is here!", data);

      return data || "No response from AI";
    } catch (error) {
      console.error(error);
      return "Error fetching response";
    } finally {
      setLoading(false);
    }
  };

  // MAIN CHAT FUNCTION
  const sendMessage = async (text: string) => {
    if (!activeChatID) return;

    const userMsg: MessageType = {
      id: Date.now(),
      text,
      sender: "user",
    };

    // add a user message first
    setChats((prev) =>
      prev.map((chat) =>
        chat.id === activeChatID
          ? { ...chat, messages: [...chat.messages, userMsg] }
          : chat,
      ),
    );

    // gets AI response
    const aiText = await query(text);

    const aiMsg: MessageType = {
      id: Date.now() + 1,
      text: aiText,
      sender: "ai",
    };

    // adds the AI message
    setChats((prev) =>
      prev.map((chat) =>
        chat.id === activeChatID
          ? { ...chat, messages: [...chat.messages, aiMsg] }
          : chat,
      ),
    );
  };

  return (
    <AppContext.Provider
      value={{
        sidebar,
        onClickSideBar,
        userText,
        setUserText,
        createNewChat,
        sendMessage,
        chats,
        activeChatID,
        setActiveChatID,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

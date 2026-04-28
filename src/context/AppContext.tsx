import { createContext, useContext, useEffect, useState } from "react";

type AppContextType = {
  sidebar: boolean;
  onClickSideBar: () => void;
  userText: string;
  setUserText: React.Dispatch<React.SetStateAction<string>>;
  // createNewChat: () => void;
  // sendMessage: (text: string) => Promise<void>;
  // chats: NewChatType[];
  // activeChatID: number | null;
  // setActiveChatID: (id: number) => void;
  // loading: boolean;
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

  // API CALL (returns AI text)
  const query = async (text: string): Promise<string> => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://router.huggingface.co/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: [{ role: "user", content: text }],
            model: "deepseek-ai/DeepSeek-V4-Pro:novita",
          }),
        },
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("API ERROR:", errorText);
        return `Error: ${response.status}`;
      }

      const result = await response.json();
      console.log("result from ai", result);

      return result?.choices?.[0]?.message?.content || "No response";
    } catch (error) {
      console.error(error);
      return "Error fetching response";
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        sidebar,
        onClickSideBar,
        userText,
        setUserText,
        // createNewChat,
        // sendMessage,
        // chats,
        // activeChatID,
        // setActiveChatID,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

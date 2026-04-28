import { useState } from "react";
import Chat from "../../components/Chat";
import { useAppContext } from "../../context/AppContext";
import DeletePopup from "../../components/DeleteChat";

const Sidebar = () => {
  const { chats, setActiveChatID, deleteChat, editChatTitle, activeChatID } =
    useAppContext();

  const [deleteId, setDeleteId] = useState<number | null>(null);

  return (
    <div className="flex flex-col py-2">
      {chats.map((chat) => (
        <div
          key={chat.id}
          onClick={() => setActiveChatID(chat.id)}
          className={`my-2 flex-1 overflow-y-auto space-y-2 cursor-pointer ${
            activeChatID === chat.id ? "bg-[#ecedef]" : ""
          }`}
        >
          <Chat
            id={chat.id}
            title={chat.title}
            updatedAt={chat.updatedAt}
            onDelete={(id) => setDeleteId(id)}
            onEdit={editChatTitle}
          />
        </div>
      ))}

      {deleteId && (
        <DeletePopup
          title={chats.find((c) => c.id === deleteId)?.title || ""}
          onCancel={() => setDeleteId(null)}
          onConfirm={() => {
            deleteChat(deleteId);
            setDeleteId(null);
          }}
        />
      )}
    </div>
  );
};

export default Sidebar;

import { IoCloseOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";

const Sidebar = () => {
  return (
    <>
      <section className="fixed top-0 left-0 h-screen w-64 bg-[#F8F9FA] border-r-2 border-[#EEF0F2]">
        <div className="w-full px-2 py-3">
          {/* Logo */}
          <div className="flex justify-between items-center">
            <h2 className="pl-1 text-2xl cursor-pointer">
              <span className="text-[#00A832]">Daiv</span>AI
            </h2>
            <span className="cursor-pointer">
              <IoCloseOutline size={20} />
            </span>
          </div>

          {/* New Chat */}
          <div className="my-4 px-1 py-1 border bg-[#00A832] text-white hover:opacity-90 rounded flex items-center cursor-pointer">
            <span className="px-1 py-2">
              <IoMdAdd size={20} />
            </span>
            <span>New Chat</span>
          </div>

          {/* Divider */}
          <div className="border border-b border-[#EEF0F2]"></div>

          {/* Chat Lists */}
          <div className="my-2 flex-1 overflow-y-auto space-y-2">
            {/* Chats  */}
            <div className="flex justify-between items-center px-2 py-3 rounded hover:bg-gray-300 cursor-pointer">
              <span>Chat 1</span>
              <span className="opacity-0 hover:opacity-100">⋮</span>
            </div>
            <div className="flex justify-between items-center px-2 py-3 rounded hover:bg-gray-300 cursor-pointer">
              <span>Chat 2</span>
              <span className="opacity-0 hover:opacity-100">⋮</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;

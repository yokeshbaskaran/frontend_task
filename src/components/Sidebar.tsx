import { IoCloseOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbDots } from "react-icons/tb";

const Sidebar = () => {
  return (
    <>
      <section className="fixed top-0 left-0 h-screen w-64 bg-[#F8F9FA] border-r flex flex-col border-[#EEF0F2]">
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
            <div className="group flex justify-between items-center px-2 py-3 rounded hover:bg-gray-300 cursor-pointer">
              <span>Chat 1</span>

              <div className="group-hover:flex hidden items-center gap-3">
                <FaRegEdit size={20} color="green" />
                <RiDeleteBinLine size={20} color="red" />
              </div>
            </div>

            <div className="group flex justify-between items-center px-2 py-3 rounded hover:bg-gray-300 cursor-pointer">
              <span>Chat 2</span>

              <div className="group-hover:flex hidden items-center gap-3">
                <FaRegEdit size={20} color="green" />
                <RiDeleteBinLine size={20} color="red" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border border-b border-[#EEF0F2]"></div>

        {/* USER profile  */}

        <div className="mt-auto flex items-center gap-2 px-3 py-5 transition-colors  hover:bg-gray-100 cursor-pointer rounded">
          <div className="flex items-center gap-2">
            <img src="./icon.png" alt="logo" className="size-8 mx-1" />

            <div className="flex flex-col">
              <h2 className="text-base font-medium"> Username </h2>
              <span className="text-[#747474] text-sm">useremail.com </span>
            </div>
          </div>

          <div className="ml-auto">
            <TbDots size={18} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;

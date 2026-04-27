import { IoCloseOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";

const Sidebar = () => {
  return (
    <>
      <section className="hidden fixed top-0 left-0 h-screen w-64 bg-[#F8F9FA] md:flex border-r-2 border-[#EEF0F2]">
        <div className="w-full px-2 py-3">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl cursor-pointer">
              <span className="text-[#00A832]">Daiv</span>AI
            </h2>
            <span className="cursor-pointer">
              <IoCloseOutline size={20} />
            </span>
          </div>

          <div className="my-4 px-2 py-1 border bg-[#00A832] text-white rounded flex items-center cursor-pointer">
            <span className="px-2 py-2">
              <IoMdAdd size={20} />
            </span>
            <span>New Chat</span>
          </div>

          <div className="border border-b border-[#EEF0F2]"></div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;

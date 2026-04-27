import "./App.css";
import { ChatBox, ContentBox } from "./components/HomeContent";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useAppContext } from "./context/AppContext";

const App = () => {
  const { sidebar } = useAppContext();

  return (
    <>
      <div>
        <div className="flex h-screen bg-white">
          <div className={`w-64  ${sidebar ? "hidden" : "md:flex"} flex-col`}>
            <Sidebar />
          </div>

          <div className="flex-1 flex flex-col">
            <Navbar />

            <div className="yoki w-full h-full flex flex-col justify-between items-center">
              <div className="my-12">
                <ContentBox />
              </div>
              <div className="w-full fixed-bottom bottom-10">
                <ChatBox />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Modal /> */}
    </>
  );
};

export default App;

import Sidebar from "./components/sidebar/Sidebar";
import PengelolaanMain from "./components/main/pengelolaan/PengelolaanMain";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import Signin from "./Pages/Signin";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    // <div className="flex h-screen max-h-screen overflow-auto">
    //   <div className="basis-1/6 shrink-0">
    //     <Sidebar />
    //   </div>
    //   <div className="grow h-full overflow-x-auto overflow-y-hidden">
    //     <PengelolaanMain />
    //   </div>
    // </div>
    // <Login />

    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;

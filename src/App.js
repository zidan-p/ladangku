import Sidebar from "./components/sidebar/Sidebar";
import PengelolaanMain from "./components/main/pengelolaan/PengelolaanMain";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import Signin from "./Pages/Signin";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1> ini adalah elemen kosong </h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />

        <Route path="/app" element={<Main />} >
          <Route path="pengelolaan" element={<PengelolaanMain />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

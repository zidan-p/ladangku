import Sidebar from "./components/sidebar/Sidebar";
import PengelolaanMain from "./components/main/pengelolaan/PengelolaanMain";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import Signin from "./Pages/Signin";
import { Route, Routes, Navigate } from "react-router-dom";
import Keuangan from "./components/main/Keuangan/Keuangan";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/app/pengelolaan"} />}  />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />

        <Route path="/app" element={<Main />} >
          <Route path="pengelolaan" element={<PengelolaanMain />} />
          <Route path="keuangan" element={<Keuangan />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

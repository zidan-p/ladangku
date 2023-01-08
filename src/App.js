import Sidebar from "./components/sidebar/Sidebar";
import PengelolaanMain from "./components/main/pengelolaan/PengelolaanMain";

function App() {
  return (
    <div className="flex h-screen max-h-screen overflow-auto">
      <div className="basis-1/6 shrink-0">
        <Sidebar />
      </div>
      <div className="grow h-full overflow-x-auto overflow-y-hidden">
        <PengelolaanMain />
      </div>
    </div>
  );
}

export default App;

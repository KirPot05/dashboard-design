import { Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Sidebar from "./components/Sidebar";
import Paths from "./Routes";

function App() {
  return (
    <div className="flex">
      {/* Sidebar with nav links*/}
      <Sidebar />

      {/* Routing Logic */}
      <div className="flex-1">
        <Navbar />
        <Routes>
          {Paths.map(({ path, component: Component }, index) => (
            <Route path={path} key={index} element={<Component />} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;

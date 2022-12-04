import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Paths from "./Routes";

function App() {
  return (
    <div className="flex">
      {/* Sidebar with nav links*/}
      <Sidebar />

      {/* Routing Logic */}
      <Routes>
        {Paths.map(({ path, component: Component }, index) => (
          <Route path={path} key={index} element={<Component />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;

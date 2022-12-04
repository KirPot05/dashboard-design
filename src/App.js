import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Sidebar from "./components/Sidebar";
import Paths from "./Routes";

function App() {
  const [link, setLink] = useState(window.location.pathname);
  return (
    <div className="flex">
      {/* Sidebar with nav links*/}
      <Sidebar link={link} setLink={setLink} />

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

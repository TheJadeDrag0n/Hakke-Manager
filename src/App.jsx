// import {} from "react";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Pallete } from "./assets/theme";
import { Context } from "./context/ContextProvider";

// Global Conponents
import FourOhFour from "./scenes/global/FourOhFour";
import Sidebar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";

// Scenes
import Index from "./scenes/dashboard/Index";

function App() {
  const { theme } = useContext(Context);

  document.getElementById("root").style.backgroundColor =
    Pallete[theme]["Background"];

  return (
    <div className="DashContainer">
      <Sidebar />
      <div className="SceneContainer">
        <Topbar />
        <div className="Scene">
          <Routes>
            {/* <Route path="/callback" element={<Callback />} /> */}
            <Route path="/" element={<Index />} />
            {/* <Route path="/vault" element={<Vault />} /> */}
            <Route path="*" element={<FourOhFour />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

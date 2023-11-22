import "./App.css";
import Taskbar from "./components/Taskbar";
import Desktop from "./components/Desktop";
import { useState } from "react";

function App() {
  const [activeButton, setActiveButton] = useState("about");

  return (
    <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
      <Desktop activeButton={activeButton} setActiveButton={setActiveButton} />
      <Taskbar activeButton={activeButton} setActiveButton={setActiveButton} />
    </div>
  );
}

export default App;

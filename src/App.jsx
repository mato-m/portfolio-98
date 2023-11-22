import "./App.css";
import Taskbar from "./components/Taskbar";
import Desktop from "./components/Desktop";
import { useState } from "react";

function App() {
  const [activeButton, setActiveButton] = useState("about");
  const [startOpen, setStartOpen] = useState(false);
  return (
    <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
      <Desktop
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        startOpen={startOpen}
        setStartOpen={setStartOpen}
      />
      <Taskbar
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        startOpen={startOpen}
        setStartOpen={setStartOpen}
      />
    </div>
  );
}

export default App;

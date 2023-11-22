import React from "react";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Start from "./Start";

const Desktop = ({
  activeButton,
  setActiveButton,
  startOpen,
  setStartOpen,
}) => {
  return (
    <div
      style={{
        height: "100svh",
        backgroundColor: "#008080",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Start startOpen={startOpen} />
      <About
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        startOpen={startOpen}
        setStartOpen={setStartOpen}
      />
      <Projects
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        startOpen={startOpen}
        setStartOpen={setStartOpen}
      />
      <Contact
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        startOpen={startOpen}
        setStartOpen={setStartOpen}
      />
      <div className="desktopNaslov">
        <h1>MATO</h1>
        <h2>Software developer</h2>
      </div>
    </div>
  );
};

export default Desktop;

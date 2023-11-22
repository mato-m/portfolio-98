import React, { useState } from "react";
import Draggable from "react-draggable";

const Contact = ({
  activeButton,
  setActiveButton,
  startOpen,
  setStartOpen,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  return (
    <Draggable
      defaultClassName="draggableDivContact"
      handle=".drag-handle"
      bounds="parent"
      onStart={() => {
        setStartOpen(false);
        document.querySelector(".draggableDivContact").style.zIndex = 9999;
        document.querySelector(".draggableDivProjects").style.zIndex = 9998;
        document.querySelector(".draggableDivAbout").style.zIndex = 9998;
        document.querySelector(
          ".draggableDivContact"
        ).firstChild.style.background =
          "linear-gradient(to right, #000080, #1174B6)";
        document.querySelector(
          ".draggableDivProjects"
        ).firstChild.style.background =
          "linear-gradient(to right, #6e6e6e, #888888)";
        document.querySelector(
          ".draggableDivAbout"
        ).firstChild.style.background =
          "linear-gradient(to right, #6e6e6e, #888888)";
        setIsDragging(true);
        setActiveButton("kontakt");
      }}
      onStop={() => setIsDragging(false)}
    >
      <div
        onMouseDownCapture={() => {
          setStartOpen(false);
          document.querySelector(".draggableDivContact").style.zIndex = 9999;
          document.querySelector(".draggableDivProjects").style.zIndex = 9998;
          document.querySelector(".draggableDivAbout").style.zIndex = 9998;
          document.querySelector(
            ".draggableDivContact"
          ).firstChild.style.background =
            "linear-gradient(to right, #000080, #1174B6)";
          document.querySelector(
            ".draggableDivProjects"
          ).firstChild.style.background =
            "linear-gradient(to right, #6e6e6e, #888888)";
          document.querySelector(
            ".draggableDivAbout"
          ).firstChild.style.background =
            "linear-gradient(to right, #6e6e6e, #888888)";
          setActiveButton("kontakt");
        }}
        style={{
          width: 250,
          height: 250,
          backgroundColor: "#C1C0C0",
          position: "absolute",
          top: 160,
          right: 120,
          display: "block",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          zIndex: 9997,
        }}
      >
        <div
          className="drag-handle"
          style={{
            background: "linear-gradient(to right, #6e6e6e, #888888)",
            color: "#fff",
            paddingTop: 6,
            paddingBottom: 6,
            cursor: isDragging ? "grabbing" : "default",
            position: "sticky",
            top: 0,
            left: 0,
            width: "calc( 100% + 40px)",
            border: "solid transparent 3px",
            borderLeftColor: "#fff",
            borderTopColor: "#fff",
            borderRightColor: "#000",
            borderBottomColor: "#000",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ marginLeft: 10 }}>Contact</span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              document.querySelector(".draggableDivContact").style.display =
                "none";
              setActiveButton("");
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
              e.preventDefault();
              document.querySelector(".draggableDivContact").style.display =
                "none";
              setActiveButton("");
            }}
            style={{
              float: "right",
              marginRight: 3,
              backgroundColor: "#C1C0C0",
              border: "solid transparent 3px",
              borderLeftColor: "#fff",
              borderTopColor: "#fff",
              borderRightColor: "#000",
              borderBottomColor: "#000",
              color: "#000",
              verticalAlign: "middle",
              cursor: "pointer",
              padding: "2px 5px",
              fontWeight: "bolder",
            }}
          >
            ×
          </span>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            overflowY: "auto",
            background: "inherit",
            overflowX: "hidden",
            border: "solid transparent 3px",
            borderLeftColor: "#fff",
            borderTopColor: "#fff",
            borderRightColor: "#000",
            borderBottomColor: "#000",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="https://linkedin.com/in/mato-m">Linkedin: mato-m</a>
            </li>
            <li>
              <a href="https://github.com/mato-m">Github: mato-m</a>
            </li>
            <li>
              <a href="mailto:martinovic.mato99@gmail.com">
                martinovic.mato99@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+38268414241">+382 68 41 42 41</a>
            </li>
          </ul>
        </div>
      </div>
    </Draggable>
  );
};

export default Contact;

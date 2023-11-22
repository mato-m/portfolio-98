import React, { useState } from "react";
import Draggable from "react-draggable";

const About = ({ activeButton, setActiveButton }) => {
  const [isDragging, setIsDragging] = useState(false);
  return (
    <Draggable
      defaultClassName="draggableDivAbout"
      bounds="parent"
      handle=".drag-handle"
      onStart={() => setIsDragging(true)}
      onStop={() => setIsDragging(false)}
    >
      <div
        onClick={() => {
          document.querySelector(".startDiv").style.display = "none";
          document.querySelector(".draggableDivAbout").style.zIndex = 9999;
          document.querySelector(".draggableDivProjects").style.zIndex = 9998;
          document.querySelector(".draggableDivContact").style.zIndex = 9998;
          document.querySelector(
            ".draggableDivAbout"
          ).firstChild.style.background =
            "linear-gradient(to right, #000080, #1174B6)";
          document.querySelector(
            ".draggableDivProjects"
          ).firstChild.style.background =
            "linear-gradient(to right, #6e6e6e, #888888)";
          document.querySelector(
            ".draggableDivContact"
          ).firstChild.style.background =
            "linear-gradient(to right, #6e6e6e, #888888)";
          setActiveButton("about");
        }}
        style={{
          width: 250,
          height: 250,
          backgroundColor: "#C1C0C0",
          position: "absolute",
          top: 50,
          left: 150,
          display: "block",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          zIndex: 9999,
        }}
      >
        <div
          className="drag-handle"
          style={{
            background: "linear-gradient(to right, #000080, #1174B6)",
            color: "#fff",
            paddingTop: 10,
            paddingBottom: 10,
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
          <span style={{ marginLeft: 10 }}>About</span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              document.querySelector(".draggableDivAbout").style.display =
                "none";
              setActiveButton("");
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
              e.preventDefault();
              document.querySelector(".draggableDivAbout").style.display =
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
              display: "flex",
              justifyContent: "center",
              padding: "2px 5px",
              alignItems: "center",
              cursor: "pointer",
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
            paddingLeft: 20,
            paddingRight: 20,
            borderBottomColor: "#000",
          }}
        >
          <h4>Introduction</h4>
          <p>
            Hello, my name is Mato. I'm a web & mobile app developer, as well as
            an AI enthusiast. I'm constantly working on gaining and improving my
            skills, as well as creating new and improving my existing projects.
          </p>
          <h4>Expertise</h4>
          <p>
            Programming languages:
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>Java</li>
              <li>C#</li>
              <li>PHP</li>
            </ul>
            Frontend tools:
            <ul>
              <li>React</li>
              <li>React Native</li>
              <li>Angular</li>
              <li>Next.js</li>
              <li>CSS Frameworks</li>
              <li>Wordpress</li>
            </ul>
            Backend tools:
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Flask</li>
              <li>JWT</li>
              <li>SQL databases</li>
              <li>MongoDB</li>
            </ul>
            Machine learning:
            <ul>
              <li>Numpy</li>
              <li>Pandas</li>
              <li>Scikit-learn</li>
              <li>Tensorflow</li>
              <li>Keras</li>
              <li>PyTorch</li>
            </ul>
            Other tools:
            <ul>
              <li>Figma</li>
              <li>Illustrator</li>
              <li>Linux CLI</li>
              <li>Docker</li>
              <li>npm</li>
              <li>Version control</li>
            </ul>
          </p>
        </div>
      </div>
    </Draggable>
  );
};

export default About;

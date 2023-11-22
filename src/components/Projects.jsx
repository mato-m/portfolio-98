import React, { useState } from "react";
import Draggable from "react-draggable";

const Projects = ({ activeButton, setActiveButton }) => {
  const [isDragging, setIsDragging] = useState(false);
  return (
    <Draggable
      defaultClassName="draggableDivProjects"
      handle=".drag-handle"
      bounds="parent"
      onStart={() => setIsDragging(true)}
      onStop={() => setIsDragging(false)}
    >
      <div
        onClick={() => {
          document.querySelector(".startDiv").style.display = "none";
          document.querySelector(".draggableDivProjects").style.zIndex = 9999;
          document.querySelector(".draggableDivContact").style.zIndex = 9998;
          document.querySelector(".draggableDivAbout").style.zIndex = 9998;
          document.querySelector(
            ".draggableDivProjects"
          ).firstChild.style.background =
            "linear-gradient(to right, #000080, #1174B6)";
          document.querySelector(
            ".draggableDivContact"
          ).firstChild.style.background =
            "linear-gradient(to right, #6e6e6e, #888888)";
          document.querySelector(
            ".draggableDivAbout"
          ).firstChild.style.background =
            "linear-gradient(to right, #6e6e6e, #888888)";
          setActiveButton("projects");
        }}
        style={{
          width: 250,
          height: 250,
          backgroundColor: "#C1C0C0",
          position: "absolute",
          top: 420,
          left: 180,
          display: "block",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          zIndex: 9998,
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
          <span style={{ marginLeft: 10 }}>Projects</span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              document.querySelector(".draggableDivProjects").style.display =
                "none";
              setActiveButton("");
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
              e.preventDefault();
              document.querySelector(".draggableDivProjects").style.display =
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
          <h4>Web & mobile apps</h4>
          <ul>
            <li>
              <a href="https://github.com/mato-m/movie-frontend">
                Movie info site
              </a>
            </li>
            <li>
              <a href="https://github.com/mato-m/news-frontend">News portal</a>
            </li>
            <li>
              <a href="https://play.google.com/store/apps/details?id=com.mato.xo.troskovi">
                Expense tracker
              </a>
            </li>
            <li>
              <a href="https://rentmne.netlify.app/">Rent a car website</a>
            </li>
            <li>
              <a href="https://crypto-track-react-app.netlify.app/">
                Crypto tracker
              </a>
            </li>
            <li>
              <a href="https://kaminisjekloca.me">Kamini Sjekloća</a>
            </li>
            <li>
              <a href="https://portfolio-mato.netlify.app">Portfolio</a>
            </li>
          </ul>
          <h4>Deep learning</h4>
          <ul>
            <li>
              <a href="https://github.com/mato-m/weather-lstm">
                Weather prediction
              </a>
            </li>
            <li>
              <a href="https://github.com/mato-m/yolo-vehicle-counting">
                Vehicle counting
              </a>
            </li>
            <li>
              <a href="https://github.com/mato-m/resnet-grape">
                Grapevine disease classification
              </a>
            </li>
          </ul>
          <h4>Classification</h4>
          <ul>
            <li>
              <a href="https://github.com/mato-m/knn-diabetes">
                Diabetes prediction
              </a>
            </li>
            <li>
              <a href="https://github.com/mato-m/gender-classification">
                Gender classification
              </a>
            </li>
            <li>
              <a href="https://github.com/mato-m/rf-wine">Wine clustering</a>
            </li>
            <li>
              <a href="https://github.com/mato-m/svm-banknote">
                Bank note authentication
              </a>
            </li>
          </ul>
          <h4>Regression</h4>
          <ul>
            <li>
              <a href="https://github.com/mato-m/regression-cars">
                Car price prediction
              </a>
            </li>
          </ul>
          <h4>Clustering</h4>
          <ul>
            <li>
              <a href="https://github.com/mato-m/kmeans-wine">
                Wine clustering
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Draggable>
  );
};

export default Projects;

import React from "react";

const Taskbar = ({
  activeButton,
  setActiveButton,
  startOpen,
  setStartOpen,
}) => {
  return (
    <div
      className="taskbar"
      style={{
        userSelect: "none",
        width: "100%",
        backgroundColor: "#C1C0C0",
        height: 40,
        position: "fixed",
        zIndex: "10000",
        bottom: 0,
        left: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          height: "90%",
        }}
      >
        <span
          onClick={(e) => {
            e.preventDefault();
            const startDiv = document.querySelector(".startDiv");
            if (startOpen) {
              startDiv.style.display = "none";
            } else {
              startDiv.style.display = "flex";
            }
            setStartOpen(!startOpen);
          }}
          className={startOpen ? "active" : ""}
          style={{
            border: "solid transparent 2px",
            borderLeftColor: "#fff",
            borderTopColor: "#fff",
            borderRightColor: "#000",
            borderBottomColor: "#000",
            marginLeft: 3,
            padding: 5,
            paddingRight: 10,
            fontWeight: "bolder",
            cursor: "pointer",
          }}
        >
          Start
        </span>
        <span
          onClick={(e) => {
            e.preventDefault();
            const draggableDivAbout =
              document.querySelector(".draggableDivAbout");
            if (activeButton === "about") {
              draggableDivAbout.style.display = "none";
            } else {
              draggableDivAbout.style.display = "block";
              draggableDivAbout.firstChild.style.background =
                "linear-gradient(to right, #000080, #1174B6)";

              document.querySelector(".draggableDivAbout").style.zIndex = 9999;
              document.querySelector(
                ".draggableDivProjects"
              ).style.zIndex = 9998;
              document.querySelector(
                ".draggableDivContact"
              ).style.zIndex = 9998;
              document.querySelector(".startDiv").style.display = "none";
              document.querySelector(
                ".draggableDivProjects"
              ).firstChild.style.background =
                "linear-gradient(to right, #6e6e6e, #888888)";
              document.querySelector(
                ".draggableDivContact"
              ).firstChild.style.background =
                "linear-gradient(to right, #6e6e6e, #888888)";
            }
            setStartOpen(false);
            setActiveButton(activeButton === "about" ? "" : "about");
          }}
          className={activeButton === "about" ? "active" : ""}
          style={{
            border: "solid transparent 1px",
            borderLeftColor: "#fff",
            borderTopColor: "#fff",
            borderRightColor: "#000",
            borderBottomColor: "#000",
            height: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: 10,
            width: 150,
            fontSize: 14,
            paddingLeft: 10,
            cursor: "pointer",
          }}
        >
          About
        </span>
        <span
          onClick={(e) => {
            e.preventDefault();
            const draggableDivProjects = document.querySelector(
              ".draggableDivProjects"
            );
            if (activeButton === "projects") {
              draggableDivProjects.style.display = "none";
            } else {
              draggableDivProjects.style.display = "block";
              draggableDivProjects.firstChild.style.background = "block";
              document.querySelector(".startDiv").style.display = "none";
              document.querySelector(
                ".draggableDivProjects"
              ).style.zIndex = 9999;
              document.querySelector(".draggableDivAbout").style.zIndex = 9998;
              document.querySelector(
                ".draggableDivContact"
              ).style.zIndex = 9998;
              draggableDivProjects.firstChild.style.background =
                "linear-gradient(to right, #000080, #1174B6)";
              document.querySelector(
                ".draggableDivAbout"
              ).firstChild.style.background =
                "linear-gradient(to right, #6e6e6e, #888888)";
              document.querySelector(
                ".draggableDivContact"
              ).firstChild.style.background =
                "linear-gradient(to right, #6e6e6e, #888888)";
            }
            setStartOpen(false);
            setActiveButton(activeButton === "projects" ? "" : "projects");
          }}
          className={activeButton === "projects" ? "active" : ""}
          style={{
            border: "solid transparent 1px",
            borderLeftColor: "#fff",
            borderTopColor: "#fff",
            borderRightColor: "#000",
            borderBottomColor: "#000",
            height: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: 150,
            fontSize: 14,
            paddingLeft: 10,
            cursor: "pointer",
          }}
        >
          Projects
        </span>
        <span
          onClick={(e) => {
            e.preventDefault();
            const draggableDivContact = document.querySelector(
              ".draggableDivContact"
            );
            if (activeButton === "kontakt") {
              draggableDivContact.style.display = "none";
            } else {
              draggableDivContact.style.display = "block";
              draggableDivContact.firstChild.style.background =
                "linear-gradient(to right, #000080, #1174B6)";
              document.querySelector(".startDiv").style.display = "none";
              document.querySelector(
                ".draggableDivContact"
              ).style.zIndex = 9999;
              document.querySelector(".draggableDivAbout").style.zIndex = 9998;
              document.querySelector(
                ".draggableDivProjects"
              ).style.zIndex = 9998;
              document.querySelector(
                ".draggableDivAbout"
              ).firstChild.style.background =
                "linear-gradient(to right, #6e6e6e, #888888)";
              document.querySelector(
                ".draggableDivProjects"
              ).firstChild.style.background =
                "linear-gradient(to right, #6e6e6e, #888888)";
            }
            setStartOpen(false);
            setActiveButton(activeButton === "kontakt" ? "" : "kontakt");
          }}
          className={activeButton === "kontakt" ? "active" : ""}
          style={{
            border: "solid transparent 1px",
            borderLeftColor: "#fff",
            borderTopColor: "#fff",
            borderRightColor: "#000",
            borderBottomColor: "#000",
            height: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: 150,
            fontSize: 14,
            paddingLeft: 10,
            cursor: "pointer",
          }}
        >
          Contact
        </span>
      </div>
      <div
        style={{
          border: "solid transparent 1px",
          borderLeftColor: "#000",
          borderTopColor: "#000",
          borderRightColor: "#fff",
          borderBottomColor: "#fff",
          display: "flex",
          marginRight: 5,
          height: "90%",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <span>
          {new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
};

export default Taskbar;

import React from "react";

const Start = ({ startOpen }) => {
  return (
    <div
      className="startDiv"
      style={{
        position: "fixed",
        bottom: 40,
        left: 0,
        background: "#c2c2c2",
        display: startOpen ? "flex" : "none",
        border: "solid transparent 2px",
        borderLeftColor: "#fff",
        borderTopColor: "#fff",
        borderRightColor: "#000",
        borderBottomColor: "#000",
        padding: 20,
        justifyContent: "flex-start",
        alignItems: "center",
        zIndex: 10001,
      }}
    >
      <img
        src="./IMG_1036.jpeg"
        alt="mato"
        style={{
          width: 150,
          height: 150,
          objectFit: "cover",
          border: "solid transparent 2px",
          borderLeftColor: "#fff",
          borderTopColor: "#fff",
          borderRightColor: "#000",
          borderBottomColor: "#000",
        }}
      />
      <p style={{ textAlign: "center", marginLeft: 20 }}>
        Mato Martinovic
        <br />
        Software developer
      </p>
    </div>
  );
};

export default Start;

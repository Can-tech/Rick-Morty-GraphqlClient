import React from "react";
import downImg from "../assets/scroll.png";

const ScrollToMore = () => {
  return (
    <div
      style={{
        zIndex: "10",
        position: "relative",
        textAlign: "center",
        top: "-20px",
        color: "white",
        fontWeight: "bold",
      }}
    >
      <img
        className="up-down-animation"
        src={downImg}
        alt="Scroll Down"
        width={50}
        height={50}
      />
    </div>
  );
};

export default ScrollToMore;

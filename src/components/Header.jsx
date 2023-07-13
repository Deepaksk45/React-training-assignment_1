import React from "react";
import keyConcepts from "../assets/images/key-concepts.png";
const Header = () => {
  return (
    <header
      style={{
              display: "flex",
          alignItems:"center",
        flexDirection: "column",
      }}
    >
      <img src={keyConcepts} alt="key-concepts"></img>
      <h1>Key React Concepts</h1>
      <p>Selected key React concepts you should know about</p>
    </header>
  );
};

export default Header;

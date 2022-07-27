// Code Keypad Component Here
import React from "react";

function Keypad() {
  function somethingChange() {
    console.log("Entering password...");
  }
  return (
    <input
      onChange={somethingChange}
      type="password"
      placeholder="Enter your password"
    ></input>
  );
}

export default Keypad;

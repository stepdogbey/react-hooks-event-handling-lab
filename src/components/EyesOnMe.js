// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
  // let onFocus = true;
  // function handleOnFocus() {
  //   if ((onFocus = !onFocus)) {
  //     console.log("Good!");
  //   } else {
  //     console.log("Hey! Eyes on me!");
  //   }
  // }
  const onFocus = () => {
    console.log("Good!");
  };
  const onBlur = () => {
    console.log("Hey! Eyes on me!");
  };
  return (
    <button onFocus={onFocus} onBlur={onBlur}>
      Eyes on me
    </button>
  );
}

export default EyesOnMe;

import buSt from "./ButtonComp.module.css";
import React from "react";

const ButtonComp = (props) => {

  return (
    <div className={`${buSt["buttonContainer"]}`}>
      <button type="submit">
        {props.children}
      </button>
    </div>
  );
};

export default ButtonComp;

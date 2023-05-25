import React from "react";
import pop_st from "./Popup.module.css";

const Popup = (props) => {

  return (
    <div className={`${pop_st["popup_container"]}`}>
      <div>
        <h3>{props.error.message}</h3>
        <p>{props.error.title}</p>
        <button onClick={props.close}>Ok</button>
      </div>
    </div>
  );
};

export default Popup;

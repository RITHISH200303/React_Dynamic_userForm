import React, { useState } from "react";
import Fc from "./FormComp.module.css";
import ButtonComp from "./ButtonComponent/ButtonComp";
import Card from "../card/Card";
import Popup from "../Popup/Popup";

const FormComp = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const usernameLiswner = (event) => {
    setEnteredUserName(event.target.value);
  };

  const userAgeLiswner = (event) => {
    setEnteredUserAge(event.target.value);
  };
  const submit = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setErrorMessage({
        message: "Invalid Input",
        title: "You have entered nothing on some field",
      });
      return;
    }
    if (enteredUserAge < 0) {
      setErrorMessage({
        message: "Invalid Input",
        title: "You have entered a negative number",
      });
      return;
    }
    props.transferData({name:enteredUserName,age:enteredUserAge})

  };

  const errorClosing = () => {
    setErrorMessage("");
  };
  return (
    <Card>
      {errorMessage && <Popup error={errorMessage} close={errorClosing}/>}
      <div className={`${Fc["formContainet"]}`}>
        <form onSubmit={submit}>
          <div>
            <label>Enter the user name: </label>
            <input
              id="username"
              type="email"
              placeholder="Enter your name"
              onChange={usernameLiswner}
            />
          </div>
          <div>
            <label>Enter the age: </label>
            <input
              id="#userage"
              type="number"
              placeholder="Enter your age"
              onChange={userAgeLiswner}
            />
          </div>
          <ButtonComp>Submit</ButtonComp>
        </form>
      </div>
    </Card>
  );
};

export default FormComp;

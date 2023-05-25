import React, { useState } from "react";
import FormComp from "./components/FormComponents/FormComp";
import Appstyle from "./App.css";
import ListShow from "./components/ListShow/ListShow";

function App() {

  const [userData,setUserData]=useState([])

  const addData=(trans)=>{
    setUserData((previousData)=>{
      return([...previousData,{name:trans.name,age:trans.age,id:Math.random().toString()}])
    })
  }

  console.log(userData)

  return (
    <div className={`${Appstyle["body"]}`}>
      <FormComp transferData={addData}/>
      <ListShow users={userData}/>
    </div>
  );
}

export default App;

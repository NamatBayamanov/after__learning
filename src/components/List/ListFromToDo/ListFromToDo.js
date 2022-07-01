import { useState } from "react";
import classes from "./ListFromToDo.module.scss";


function ListFromToDo({addtask}) {

  const [userInput, setUserInput] = useState("");

  const onSubmitTask = (event) => {
    event.preventDefault();
    addtask(userInput);
    setUserInput("");
  }

  const onChangeFunc = (event) => {
    setUserInput(event.target.value);
  }

  return ( 
    <div className={classes.ListFromToDo}>
      <form onSubmit={onSubmitTask}>
        <input type="text" value={userInput} onChange={onChangeFunc}/>
        <button>Send</button>
      </form>
    </div>
  );
}

export default ListFromToDo;
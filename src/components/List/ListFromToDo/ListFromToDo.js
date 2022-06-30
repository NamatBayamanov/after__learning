import { useState } from "react";
import classes from "./ListFromToDo.module.scss";


function ListFromToDo({addtask}) {

  const [userInput, setUserInput] = useState("");

  const onSubmitTask = (event) => {
    event.preventDefault();
    addtask(userInput);
    setUserInput("");
  }
  return ( 
    <div className={classes.ListFromToDo}>
      <form onSubmit={onSubmitTask}>
        <input />
        <button>Send</button>
      </form>
    </div>
  );
}

export default ListFromToDo;
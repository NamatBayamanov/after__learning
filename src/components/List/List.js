import { useState } from "react";
import classes from "./List.module.scss";
import ListFromToDo from "./ListFromToDo/ListFromToDo";

function List() {
  const [todos, setTodos] = useState([]);

  const onAddTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        addtask: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  }

  const onRemove = (id) => {
    setTodos([...todos.filter(item => item === id)]);
  }

  const onToggle = (id) => {
    setTodos([...todos.map(item => item.complete !== id ? [...todos, !item.complete] : [...todos])]);
  }

  return ( 
    <div className={classes.List}>
      <ListFromToDo addtask={onAddTask}/>
    </div>
  );
}

export default List;
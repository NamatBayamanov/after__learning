import { useState } from "react";
import classes from "./List.module.scss";
import ListFromToDo from "./ListFromToDo/ListFromToDo";
import ListToDo from "./ListToDo/ListToDo";

function List() {
  const [todos, setTodos] = useState([]);

  const onAddTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2.9),
        addtask: userInput,
        complete: false,
      };
      console.log(todos);
      setTodos([...todos, newItem]);
    }
  }

  const onRemove = (id) => {
    setTodos([...todos.filter((currentValue, index, arr) => currentValue.id !== id)]);
    console.log(todos);
  }

  const onToggle = (id) => {
    setTodos([...todos.map((currentValue, index, arr) => {
      if (currentValue.id === id) {
        return(
          console.log(currentValue),
          {...currentValue, complete: !currentValue.complete}
          
        );
      }
      else {
        return(
          {...currentValue}
          
        );
      }
    }) ]);
    
  }

  return (
    <div className={classes.List}>
      <h2>{todos.length}</h2>
      <ListFromToDo addtask={onAddTask} />
      {todos.map(todo => {
        return (
          <ListToDo key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} />
        );
      })}
    </div>
  );
}

export default List;
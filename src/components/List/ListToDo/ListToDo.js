import classes  from "./ListToDo.module.scss";


function ListToDo({todo, onRemove, onToggle}) {

  return ( 
    <div className={classes.ListToDo} key={todo.id} >
      <div key={todo.id} className={ todo.complete ? `${classes.item_text} ${classes.strike}` : `${classes.item_text}`} onClick={() => onToggle(todo.id)}>
        {todo.addtask}
      </div>
      <button onClick={() => onRemove(todo.id)}>X</button>
    </div>
  );          
}

export default ListToDo;          
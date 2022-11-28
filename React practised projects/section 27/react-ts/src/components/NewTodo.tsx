import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";
const NewToDo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // const enteredText = todoTextInputRef.current?.value;//? meansif there is value store it else it will be null
    const enteredText = todoTextInputRef.current!.value; //!this means we are sure it will not be null
    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }
    todosCtx.addTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};
export default NewToDo;

import React, { useContext } from "react";
import Todo from "../models/todo";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from "./Todo.module.css";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  //Fc stands fro functional Component ie to act as a functional component
  //with the base definition , we provide our definitio also
  //ie our own props definition is also provided with this
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} //bind is a function which allows us to pre configure a function for future execution
        />
      ))}
    </ul>
  );
};

export default Todos;

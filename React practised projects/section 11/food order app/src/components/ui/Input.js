import React from "react";
import classes from "./Input.module.css";
//beacuse of suing useRef in MealItemForm
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      {/* the ref is gotten from mealItemForm */}
      {/* the above line means to add all the key value pais of props.input */}
    </div>
  );
});

export default Input;

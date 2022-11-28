// import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title); //returns array with 2 state,
  // const [amount, setamount] = useState(props.amount); //returns array with 2 state,

  // let title = props.title;
  // const clickHandler = () => {
  //   setTitle("Updated!");
  //   // setamount("123");

  //   // console.log(title);
  // };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          {/* <h2>{title}</h2> */}
        </div>
        <div className="expense-item__price">${props.amount}</div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;

import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.trunc(Math.random() * 20 + 1).toString(),
    };

    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEdiingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEdiingHandler}
        />
      )}
      {/* onSaveExpenseData recieves expenseData as a value when saveExpenseDataHanndler is invoked */}
    </div>
  );
};

export default NewExpense;

import React, { useRef } from "react";
import LoadingIndicator from "../UI/LoadingIndicator";
import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  const inputNameRef = useRef();
  const inputAmountRef = useRef();
  console.log("rendering from");
  const submitHandler = (event) => {
    event.preventDefault(props);
    const enteredName = inputNameRef.current.value;
    const enteredAmount = inputAmountRef.current.value;

    props.onAddIngredients({ name: enteredName, amount: enteredAmount });
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" ref={inputNameRef} />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" ref={inputAmountRef} />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading && <LoadingIndicator />}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;

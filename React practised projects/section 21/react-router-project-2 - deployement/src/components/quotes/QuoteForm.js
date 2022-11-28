import { useRef, useState } from "react";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";
import { Prompt } from "react-router-dom";
import React from "react";
const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const formFocusedHandler = () => {
    console.log("Focus!");
    setIsEntering(true);
  };

  //important thing: without this,when the form is filled, and when accidently toches form after ,the form cannot be submitted even thoigh entered correctlty
  //this function is to prevent that
  const finishEnteringHandler = () => {
    setIsEntering(false);
  };
  return (
    <React.Fragment>
      {/* prompt makes sure when to show the elements */}
      <Prompt
        when={isEntering}
        message={(location) =>
          "Are you sure yu want to leave? All your entered data will be lost!"
        }
      />
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default QuoteForm;

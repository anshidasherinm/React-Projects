import React, { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quote");
    }
  }, [status, history]);
  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
    console.log(quoteData);
    history.push("/quotes");

    //the successfull submission of the from must make the page to go back tp a different page
    //for that we use useHistory hook
  };
  return (
    <React.Fragment>
      <h1>New Quote Page</h1>
      <QuoteForm
        isLoading={status === "pending"}
        onAddQuote={addQuoteHandler}
      />
    </React.Fragment>
  );
};

export default NewQuote;

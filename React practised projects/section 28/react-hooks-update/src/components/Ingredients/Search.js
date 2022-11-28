import React, { useEffect, useState, useRef } from "react";

import Card from "../UI/Card";
import LoadingIndicator from "../UI/LoadingIndicator";
import "./Search.css";
import useHttp from "../../hooks/http";
import ErrorModal from "../UI/ErrorModal";

const Search = React.memo((props) => {
  const { isLoading, data, error, sendRequest, clear } = useHttp();
  const inputRef = useRef();
  const { onLoadIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState("");
  const filterChangeHandler = (event) => {
    setEnteredFilter(event.target.value);
  };
  // const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query =
          enteredFilter.length === 0
            ? ""
            : `?orderBy="name"&equalTo="${enteredFilter}"`;
        sendRequest(
          "https://react-hook-747ce-default-rtdb.firebaseio.com/ingredients2.json" +
            query,
          "GET"
        );
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, inputRef, sendRequest]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const loadedIngredients = [];
      for (const key in data) {
        loadedIngredients.push({
          id: key,
          name: data[key].name,
          amount: data[key].amount,
        });
      }
      onLoadIngredients(loadedIngredients);
    }
  }, [data, isLoading, error, onLoadIngredients]);

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            ref={inputRef}
            type="text"
            value={enteredFilter}
            onChange={filterChangeHandler}
          />
        </div>
      </Card>
      {/* {isLoading && <LoadingIndicator />} */}
    </section>
  );
});

export default Search;

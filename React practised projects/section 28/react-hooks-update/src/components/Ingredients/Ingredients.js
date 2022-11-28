import React, { useReducer, useEffect, useCallback, useMemo } from "react";
import IngredientList from "./IngredientList";
import IngredientForm from "./IngredientForm";
import Search from "./Search";
import ErrorModal from "../UI/ErrorModal";
import useHttp from "../../hooks/http";
const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter((ing) => ing.id !== action.id);
    default:
      throw new Error("Should not get there !");
  }
};

function Ingredients(props) {
  const { isLoading, error, data, sendRequest, reqExtra, reqIdentifer, clear } =
    useHttp();
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);

  useEffect(() => {
    if (!isLoading && !error && reqIdentifer === "REMOVE_INGREDIENT") {
      dispatch({ type: "DELETE", id: reqExtra });
    } else if (!isLoading && !error && reqIdentifer === "ADD_INGREDIENT") {
      dispatch({
        type: "ADD",
        ingredient: { id: data.name, ...reqExtra },
      });
    }
  }, [data, reqExtra, reqIdentifer, isLoading, error]);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    dispatch({ type: "SET", ingredients: filteredIngredients });
  }, []);

  const addIngredientHandler = useCallback(
    (ingredient) => {
      sendRequest(
        "https://react-hook-747ce-default-rtdb.firebaseio.com/ingredients2.json",
        "POST",
        JSON.stringify(ingredient),
        ingredient,
        "ADD_INGREDIENT"
      );
    },
    [sendRequest]
  );

  const ingredientRemoveHandler = useCallback(
    (ingredientId) => {
      sendRequest(
        `https://react-hook-747ce-default-rtdb.firebaseio.com/ingredients2/${ingredientId}.json`,
        "DELETE",
        null,
        ingredientId,
        "REMOVE_INGREDIENT"
      );
    },
    [sendRequest]
  );

  const ingredientlist = useMemo(() => {
    return (
      <IngredientList
        ingredients={userIngredients}
        onRemoveItem={ingredientRemoveHandler}
      />
    );
  }, [userIngredients, ingredientRemoveHandler]);
  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredients={addIngredientHandler}
        loading={isLoading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {ingredientlist}
      </section>
    </div>
  );
}

export default Ingredients;

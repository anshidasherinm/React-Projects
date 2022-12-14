import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delious Food,Delivered To You</h2>
      <p>
        Choose your favorite meals from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home
      </p>
      <p>
        All our meals are cooked with high quality ingredients Just-in-time and
        of course by experienced chefs !
      </p>
    </section>
  );
};

export default MealsSummary;

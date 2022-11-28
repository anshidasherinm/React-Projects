import "./Card.css";

//it is a container component
//will not accept any props from others but willl be using the default method of props
//props.children tells to take the content inside the opening and closing tag of the Crad used in the expensetem or in any other component used
//need to support the styles of the other classes also
const Card = (props) => {
  //for getting style from all the classes
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;

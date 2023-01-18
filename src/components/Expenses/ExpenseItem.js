import "./ExpenseItem.css";
//this fuction allows us to define values as state, where changes to these values should reflect
//in the component function being called again, is a React hook
import React, {useState} from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  //must be called directly inside component function
  //first element, is a pointer to props.title, second one is a function which we  can later call to set a new title
  //this hook always return an array with two elemnts
  const [title, setTitle] = useState(props.title);

  //funcion for the event handler
  const clickHandler = () =>{
    setTitle('Updated!');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;

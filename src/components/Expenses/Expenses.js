import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterYearSelected = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredEsxpenses = props.items.filter((expense) => {
    console.log(filteredYear);
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //si se cumple la condicion muestra el parrafo
  //{filteredEsxpenses.length===0 && <p>No expenses found.</p>}
   
/*Other way
  {filteredEsxpenses.length === 0 ? (
    expensesContent
  ) : (
    filteredEsxpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  )}
 */
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearSelected={filterYearSelected}
        />
        <ExpensesChart expenses={filteredEsxpenses}/>
        <ExpensesList items={filteredEsxpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

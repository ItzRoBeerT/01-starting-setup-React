import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
function Expenses() {
  const expenses = [
    {id:'e1', title: "Toilet Paper", amount: 94.5, date: new Date(2021, 4, 21) },
    {id:'e2', title: "New TV", amount: 799.49, date: new Date(2021, 3, 14) },
    {id:'e3', title: "Car Insurance", amount: 273.5, date: new Date(2021, 8, 4) },
    {id:'e4', title: "New Desk (Wooden)", amount: 100.50, date: new Date(2021, 1, 6) },
  ];

  return (
    <div className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
       <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
       <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default Expenses;
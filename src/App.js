import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
//You can use function App(){} too, there is no changes on use arrow function
const App = () => {
  const expenses = [
    {id:'e1', title: "Toilet Paper", amount: 94.5, date: new Date(2021, 4, 21) },
    {id:'e2', title: "New TV", amount: 799.49, date: new Date(2021, 3, 14) },
    {id:'e3', title: "Car Insurance", amount: 273.5, date: new Date(2021, 8, 4) },
    {id:'e4', title: "New Desk (Wooden)", amount: 100.50, date: new Date(2021, 1, 6) },
  ];

  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;

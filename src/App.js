/* eslint-disable no-unused-vars */

import ExpenseItem from "./Components/ExpenseItem";

function App() {
  let expenses = [
    {
      id: "e1",
      title: "school Fee",
      amount: 250,
      date: new Date(2022, 5, 12),
    },
    {
      id: "e2",
      title: "Books ",
      amount: 230,
      date: new Date(2023, 5, 12),
    },
    {
      id: "e3",
      title: "House rent",
      amount: 75,
      date: new Date(2022, 4, 12),
    },
    {
      id: "e4",
      title: "Food",
      amount: 250,
      date: new Date(2022, 5, 22),
    },
    {
      id: "e4",
      title: "Food",
      amount: 250,
      date: new Date(2022, 5, 22),
    },
  ];

  // let expenseDate = new Date(2023, 6, 28);
  // let expenseTitle = "School Fee";
  // let expenseAmount = 300;

  return (
    <div>
      <h1 className="heading">Expense Tracker</h1>
      <div className="App">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          ></ExpenseItem>
        ))}
      </div>
    </div>
  );
}

export default App;

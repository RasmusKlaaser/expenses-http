import './App.css';
import ExpenseItem from './Components/ExpenseItem'


function App() {
  const expenses = [
    {
      date: new Date(2023, 0, 10),
      title: "Harry Booter",
      price: 30.99
    },
    {
      date: new Date( 2023, 0, 10),
      title: "Tommy Hilfiger",
      price: 99.99
    }
  ]

  return (
    <div className="App">
      <ExpenseItem expenseData={expenses[0]}></ExpenseItem>
      <ExpenseItem expenseData={expenses[1]}></ExpenseItem>
    </div>
  );
}

export default App;

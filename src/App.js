import Expenses from "./Components/Expenses/Expenses";

const App = () => { 
  const expenses =[ 
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
      <Expenses expensesData={expenses}/>    
    </div>
  );
}

export default App;

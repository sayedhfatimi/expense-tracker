import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Veggies", amount: 20, category: "Groceries" },
    { id: 2, description: "Meat", amount: 60, category: "Groceries" },
    { id: 3, description: "Fruit", amount: 15, category: "Groceries" },
    { id: 4, description: "Protein Shake", amount: 30, category: "Groceries" },
    { id: 5, description: "Mobile", amount: 100, category: "Utilities" },
    { id: 6, description: "Credit Card", amount: 25, category: "Utilities" },
    { id: 7, description: "Electricity", amount: 200, category: "Utilities" },
    { id: 8, description: "Car", amount: 300, category: "Other" },
    { id: 9, description: "Insurance", amount: 80, category: "Other" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="container">
        <div className="mb-5">
          <ExpenseForm
            onSubmit={(expense) =>
              setExpenses([
                ...expenses,
                { ...expense, id: expenses.length + 1 },
              ])
            }
          />
        </div>
        <div className="mb-3">
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
        </div>
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </div>
    </>
  );
}

export default App;

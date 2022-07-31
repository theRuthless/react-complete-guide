import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

export const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveMyExpenseData = (expenseData) => {
    const expenseSavedData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseSavedData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpense={saveMyExpenseData}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

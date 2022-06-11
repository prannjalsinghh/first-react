import React from 'react';

import ExpenseForm from './ExpenseForm.js';
import './NewExpense.css';

const NewExpense = (props) => {
    const dataHandler = (enteredData)=>{
        const expenseData = {
            ...enteredData,
            id:Math.random().toString()
        }
        console.log(expenseData);

        props.onAddExpense(expenseData);
    }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData= {dataHandler}/>
    </div>
  );
};

export default NewExpense;
import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [changedTitle, titleChanger] =useState('');
    const [changedAmount, amountChanger]=useState('');
    const [changedDate,dateChanger]=useState('');

    const titleChangeHandler = event =>{
        titleChanger(event.target.value);
    }
    const amountChangeHandler = event =>{
        amountChanger(event.target.value);
    }
    const dateChangeHandler = event =>{
        dateChanger(event.target.value);
    }

    const submitHandler = event =>{
        event.preventDefault();

        const ExpenseData = {
            title:changedTitle,
            amount: changedAmount,
            date: new Date(changedDate)
        };

       
        props.onSaveExpenseData(ExpenseData);
        titleChanger('');
        amountChanger('');
        dateChanger('');
    }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={changedTitle} onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={changedAmount} onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={changedDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
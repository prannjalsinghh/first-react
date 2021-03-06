import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../../UI/Card';
import React, {useState} from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

function Expenses(props){
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses= props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })
  

    return(
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

        <ExpensesChart expenses={filteredExpenses} />

        {filteredExpenses.length===0 ? <p>No content found </p> : filteredExpenses.map((expense) => (
        <ExpenseItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date} 
        />
        ))} 
        
       
      
     </Card>
    );
}

export default Expenses;
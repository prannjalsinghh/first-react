import React, {useState} from "react";
import ExpenseDate from './ExpenseDate';
import Card from '/Users/pranj/Desktop/react-guide/src/components/UI/Card'
import './ExpenseItem.css';
function ExpenseItem(props){
    
    const [title,setTitle] = useState(props.title);

    function clickHandler(){
        setTitle('updated');
        console.log(title);
    }

    return(
    <div>
        <ExpenseDate  date= {props.date}/>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
 </div>
    );
}

export default ExpenseItem;
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '/Users/pranj/Desktop/react-guide/src/components/UI/Card'
function Expenses(props){

    return(
        // <Card className="expenses">
        <div>
        <ExpenseItem 
        title= {props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
        />
        <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
     </div>
    );
}

export default Expenses;
import './ExpenseItem.css';


function ExpenseItem() {
    return (
        <div className="expense-list">
        <h1 className="heading">Expense Items</h1>
        <div className="Expense-Item">
           <div><h2>Food</h2></div> 
            <div>
               <h4>Rs 200</h4> 
           </div>
        </div>
        <div className="Expense-Item">
           <div><h2>    Movies</h2></div> 
            <div>
               <h4>Rs 200</h4> 
           </div>
        </div>
        <div className="Expense-Item">
           <div><h2>Petrol</h2></div> 
            <div>
               <h4>Rs 2000</h4> 
           </div>
        </div>
        </div>
          );

}

export default ExpenseItem;
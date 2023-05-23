import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
const Remaining = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div style={{padding:'19px'}} className={`alert ${alertType}`}>
            <span >Remaining: {currency}{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;

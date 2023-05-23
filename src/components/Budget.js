import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = (props) => {
    const { budget, dispatch, remaining, currency } = useContext(AppContext);
    const changeEvent = (changeBudget) => {
        if(changeBudget>20000) {
            alert('Budget cannot exceed 20,000£');
            changeBudget=20000;
        } else if(remaining<=0) {
                alert('Budget cannot be lower than current expenses');
                changeBudget=budget;
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: changeBudget,
            });
        }

    }
    return (
        <div  className='alert alert-secondary'>
            <span>Budget:{currency}<input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        style={{ size: 10}}
                        step='10'
                        onChange={(event) => changeEvent(event.target.value)}>
                        </input></span>
        </div>
    );
};
export default Budget;

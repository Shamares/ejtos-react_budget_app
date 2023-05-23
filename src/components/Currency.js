import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div style={{padding:'13px'}} className='alert alert-secondary'> {
      <select style={{backgroundColor: 'lightGreen', borderColor: 'lightgreen', padding: '5px', color:'white', borderRadius: '5px'}}  name="Currency" id="Currency" onChange={(event)=>changeCurrency(event.target.value)}>
        <option style={{color:'black',}} value="£" label="Currency (£ Pound)">£ Pound</option>
        <option style={{color:'black',}} value="$" label="Currency ($ Dollar)">$ Dollar</option>
        <option style={{color:'black',}} value="€" label="Currency (€ Euro)">€ Euro</option>
        <option style={{color:'black',}} value="₹" label="Currency (₹ Ruppee)">₹ Ruppee</option>
      </select>	
      }	
    </div>
    );
};

export default Currency;
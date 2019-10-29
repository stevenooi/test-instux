import React from 'react';
import { getState, setState } from 'react-instux';
import { addFood, selectFood } from './operation/inventory';
import { useState } from 'react';
import {
  Link
} from "react-router-dom";

function Body() {
  const { count, inventory } = getState();
  const [ foodType, setFoodType ] = useState('');

  return (
    <div className="App">getState():{JSON.stringify(getState())}
      {JSON.stringify(getState('count'))}:
      <div>Type: <input type="text" value={foodType} onChange={e => setFoodType(e.target.value)}></input></div>
      <div><button onClick={() => addFood(foodType)}>Add Inventory</button></div>
      <div>
        <button onClick={() => setState(count + 3, 'count')}>-</button>
        <button onClick={() => setState(count + 2, 'count')}>+</button>
        <button onClick={() => setState(['Burger'],'inventory.food')}>*</button>
      </div>
      <div>
        {
          inventory.food.map((obj, i)=><div className="row"><Link to ={`/test`} onClick={() => selectFood(i)} >{obj}</Link></div>)
        }
      </div>
      <Link to="/test">Page2</Link>
    </div>
  );
}

export default Body;

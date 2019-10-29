import React, {useState} from 'react';
import { updateFood } from './operation/inventory';
import { getState, setState } from 'react-instux';
import {
  Link
} from "react-router-dom";

function Page2() {
  const { inventory, selection } = getState();
  const [ foodType, setFoodType ] = useState(inventory.food[selection.food]);
  return (
    <div>
      <div>Type: <input type="text" value={foodType} onChange={e => setFoodType(e.target.value)}></input></div>
      <div><button onClick={() => updateFood(foodType, selection.food)}>Update Food</button></div>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Page2;

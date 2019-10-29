import { getState, setState } from 'react-instux';
import history from '../../history';

const addFood = (value) => {
    const { inventory } = getState();
    inventory.food.push(value);
    setState(inventory.food, 'inventory.food');
}

const selectFood = (index) => {
    const { selection } = getState();
    selection.food = index;
    setState(selection, 'selection');
}

const updateFood = (value, index) => {
    const { inventory } = getState();
    inventory.food[index] = value;
    setState(inventory.food, 'inventory.food');
    history.push('/');
}

export { addFood, selectFood, updateFood };
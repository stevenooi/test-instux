import { createStore } from 'redux';

const initialState = {count: 0};

  
export default function configureStore(initialState) {
    const store = createStore(
        initialState,
    );

    return store;
}

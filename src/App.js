import React from 'react';
import Body from './Body';
import Page2 from './Page2';
import history from './history';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { InitializeInstux } from 'react-instux';
import './App.css';

const initialState = {
  count: 0,
  inventory: {
      food: [],
  },
  selection: {},
};

function App() {
  InitializeInstux(initialState, React);
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/test">
            <Page2></Page2>
          </Route>
          <Route path="/">
            <Body></Body>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

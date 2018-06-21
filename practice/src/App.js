import {createStore} from 'redux';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Working with Redux

const initialState = {
  result: 1,
  lastValues: []
};

// Reducer takes an action and applies it to the state
// const reducer = (state,action) =>{
const reducer = (state = initialState ,action) =>{
  // Checking what action to use
  switch(action.type){
    case "ADD":
      // state = state + action.payload;
      // Implementing immutable state changing
      state ={
        // Spread ES6 syntax to copy all properties from input state to new object
        ...state,
        result: state.result + action.payload,
        // immutable way of pushing elements into an array
        lastValues: [...state.lastValues, action.payload]
      }
      break;
    case "SUBTRACT":
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      }
      break;
  }
  // Reducer always returns a state
  return state;
};
// Second argument of createStore is the Initial state
// First arg is the Reducer you want to use, can use multiple reducers
// const store = createStore(reducer,1);
// Can remove the second argument since we created and set an initial state in Reducer
const store = createStore(reducer);



store.subscribe( () => {
  console.log("Store updated!", store.getState())
});

// Dispatching runs the reducer found in the store with the specific action name
// Takes a js object
store.dispatch({
  type:'ADD',
  payload: 10,

});

store.dispatch({
  type:'SUBTRACT',
  payload: 10,
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

import React, {useReducer} from 'react';
import "reset-css"; 
import './App.scss';

import Navbar from './components/Navbar'
import TodoList from './components/TodoList'

import {initialState, reducer} from './reducers/taskReducer'

function App() {
  const [tasks, dispach] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <Navbar dispach={dispach} />
      <TodoList tasks={tasks} dispach={dispach} />
    </div>
  );
}

export default App;

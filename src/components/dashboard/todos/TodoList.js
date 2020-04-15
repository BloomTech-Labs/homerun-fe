import React, { useState, useEffect } from 'react';
import { List, Dropdown } from 'semantic-ui-react';
import '../../../SASS/TodoList.scss';
import Todo from './Todo.js';
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../../actions/index.js'
import { SwipeableList } from '@sandstreamdev/react-swipeable-list';

import ControlTodo from "./ControlTodo.js"

import dayjs from 'dayjs';


const TodoList = () => {

  const store = useSelector(state => state.todos);
  const currentUser = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.todo.fetchTodos())
    dispatch(actions.houseHold.fetchHousehold());
  }, [])

  return (
    <section>
      <div style={{ margin: "50px 0px" }}>
        <h3>Todo</h3>
        <SwipeableList>
          {store.map((todo, index) => {
            return <Todo key={index} {...todo} />
          })}
        </SwipeableList>
      </div>

      {/* Conditionally render the todos based on completion. */}
      <div>
        <h3>Todone</h3>
        <SwipeableList>
          {store.map((todo, index) => {
            return <Todo key={index} {...todo} />
          })}
        </SwipeableList>
      </div>


      {!currentUser.childActive ? <ControlTodo /> : ''}
    </section>
  )
}

export default TodoList;

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

  const store = useSelector(state => state.todos)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.todo.setTodos())
  }, [dispatch])

  return (
    <section className="ui container">
      <SwipeableList>
        {store.map((todo, index) => {
          return <Todo key={index} {...todo} />
        })}
      </SwipeableList>
      <ControlTodo />
    </section>
  )
}

export default TodoList;

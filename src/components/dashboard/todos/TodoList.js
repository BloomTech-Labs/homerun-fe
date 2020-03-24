import React, { useState, useEffect } from 'react';
import { List, Dropdown } from 'semantic-ui-react';

import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import '../../../SASS/TodoList.scss';
import axiosWithAuth from '../../../utils/AxiosWithAuth.js';
import Todo from './Todo.js';

import ControlTodo from "./ControlTodo.js"

import dayjs from 'dayjs';


const TodoList = () => {
  const [todos, setTodos] = useState([]);
  // hard coded Household id right now
  useEffect(() => {
    axiosWithAuth().get(`/todos/household`)
      .then(res => {
        setTodos(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <List size='massive' celled verticalAlign='middle'>
        {todos.map((todo, index) => {
          todo.due = dayjs(todo.due).format('MM/DD/YYYY');
          return <Todo key={index} id={todo.id} task={todo} />
        })}
      </List>
      <ControlTodo />
    </>
  )
}

export default TodoList;

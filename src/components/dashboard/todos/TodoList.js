import React, { useState, useEffect } from 'react';
import { List, Dropdown } from 'semantic-ui-react';

import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import '../../../SASS/TodoList.scss';
import axiosWithAuth from '../../../utils/AxiosWithAuth.js';
import Todo from './Todo.js';
import DatePicker from "react-datepicker";
import advancedFormat from "dayjs/plugin/advancedFormat";

import dayjs from 'dayjs';


const TodoList = () => {
  const [todos, setTodos] = useState([]);
  // hard coded Household id right now
  useEffect(() => {
    axiosWithAuth().get(`/todos/household`)
      .then(res => {
        console.log(res)
        // Dummy date
        let date = dayjs(1583889820327).format('MM/DD/YYYY');
        setTodos(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <List size='massive' celled verticalAlign='middle'>
        {todos.map(todo => {
          todo.due = dayjs(todo.due).format('MM/DD/YYYY');
          return <Todo id={todo.id} task={todo} />
        })}
      </List>
    </>
  )
}

export default TodoList;

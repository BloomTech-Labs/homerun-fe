import React, { useState, useEffect } from 'react';
import { Icon, List } from 'semantic-ui-react';
import axiosWithAuth from '../../utils/AxiosWithAuth.js';
import dayjs from 'dayjs';
import Todo from './todos/Todo.js';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  // hard coded Household id right now
  useEffect(() => {
    axiosWithAuth().get(`/todos/a12345`)
      .then(res => {
        console.log(res.data)
        let date = dayjs(1583889820327).format('MM/DD/YYYY'); // Look into Human interval package for giving due dates time
        setTodos(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <List celled verticalAlign='middle'>
        {todos.map((todo, index) => {
          todo.due = dayjs(todo.due).format('MM/DD/YYYY');
          return <Todo key={index} id={todo.id} task={todo} />
        })}
      </List>
    </>
  )
}

export default TodoList;

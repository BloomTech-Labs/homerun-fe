import React, { useState, useEffect } from 'react';
import { List } from 'semantic-ui-react';

import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import '../../SASS/TodoList.scss';
import axiosWithAuth from '../../utils/AxiosWithAuth.js';
import Todo from './Todo.js';


const TodoList= () => {
  const [todos, setTodos] = useState([]);
  // hard coded Household id right now
  useEffect(() => {
    axiosWithAuth().get(`/todos/a12345`)
      .then(res => {
        console.log(res);
        setTodos(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <List size='massive' celled verticalAlign='middle'>
      {todos.map(todo => {
        return <Todo id={todo.id} task={todo.title} />
      })}
    </List>
    )
  }

export default TodoList;

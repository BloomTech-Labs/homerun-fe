import React, { useState, useEffect, useLayoutEffect } from 'react';
import { List, Dropdown } from 'semantic-ui-react';
import '../../../SASS/TodoList.scss';
import Todo from './Todo.js';
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../../actions/index.js'
import { SwipeableList } from '@sandstreamdev/react-swipeable-list';

import ControlTodo from "./ControlTodo.js"

const TodoList = () => {

  const store = useSelector(state => state.todos);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();



  const [todos, setTodos] = useState([])
  const [todones, setTodones] = useState([])

  useEffect(() => {
    dispatch(actions.todo.fetchTodos())
    dispatch(actions.houseHold.fetchHousehold());
  }, [])

  useEffect(() => {
    if (user.childActive === true) {
      console.log("todolist.js :29 'IF'")
      for (let todo in store) {
        todo.completed === false
          ? setTodos(todo.assigned.filter(userobj => userobj.child === true && userobj.id === user.userChild.id))
          : setTodones(todo.assigned.filter(userobj => userobj.child === true && userobj.id === user.userChild.id))
      }
    } else {
      console.log("todolist.js : 'ELSE'")
      setTodos(store.filter(todo => todo.completed === false))
      setTodones(store.filter(todo => todo.completed === true))
    }
  }, [store])

  return (
    <section>
      <div style={{ margin: "50px 0px" }}>
        <h3>Todo</h3>
        <SwipeableList>
          {todos.map((todo) => {
            return <Todo key={todo.id} {...todo} />
          })}
        </SwipeableList>
      </div>

      {/* Conditionally render the todos based on completion. */}
      <div>
        <h3>Todone</h3>
        <SwipeableList>
          {todones.map((todo) => {
            return <Todo key={todo.id} {...todo} />
          })}
        </SwipeableList>
      </div>
      {!user.childActive ? <ControlTodo /> : ''}
    </section>
  )
}

export default TodoList;

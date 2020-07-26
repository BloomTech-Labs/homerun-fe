import React, { useState, useEffect } from 'react';
import Todo from './Todo.js';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../actions/index.js';
import { SwipeableList } from '@sandstreamdev/react-swipeable-list';

import ControlTodo from './ControlTodo.js';

const TodoList = () => {
  const store = useSelector((state) => state.todos.todos);
  const currentUser = useSelector((state) => state.user);
  const userIsChild = useSelector((state) => state.user.childActive);
  const dispatch = useDispatch();
  console.log(store);
  const [todos, setTodos] = useState([]);
  const [todones, setTodones] = useState([]);

  useEffect(() => {
    dispatch(actions.todo.fetchTodos());
    dispatch(actions.houseHold.fetchHousehold());
  }, []);

  useEffect(() => {
    const incomplete = store.filter((todo) => todo.completed === false);
    const complete = store.filter((todo) => todo.completed === true);
    if (userIsChild) {
      const childIncomplete = incomplete.filter((t) => {
        let isAssigned = false;
        t.assigned.forEach((a) => {
          if (a.username === currentUser.userChild.username) {
            isAssigned = true;
          }
        });
        return isAssigned;
      });
      const childComplete = complete.filter((t) => {
        let isAssigned = false;
        t.assigned.forEach((a) => {
          if (a.username === currentUser.userChild.username) {
            isAssigned = true;
          }
        });
        return isAssigned;
      });
      setTodos(childIncomplete);
      setTodones(childComplete);
    } else {
      setTodos(incomplete);
      setTodones(complete);
    }
  }, [store, userIsChild]);

  return (
    <section>
      <h3>Todo</h3>
      <div className="todos-list">
        <SwipeableList>
          {store.map((todo) => {
            return <Todo key={todo.id} {...todo} {...todo.todo} />;
          })}
        </SwipeableList>
      </div>

      {/* Conditionally render the todos based on completion. */}
      <h3>Todone</h3>
      <div className="todones-list">
        <SwipeableList>
          {todones.map((todo) => {
            return <Todo key={todo.id} {...todo} />;
          })}
        </SwipeableList>
      </div>
      {!currentUser.childActive ? <ControlTodo /> : ''}
    </section>
  );
};

export default TodoList;

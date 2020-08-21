import React, { useState, useEffect } from 'react';
import Todo from './Todo.js';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../actions/index.js';
import { SwipeableList } from '@sandstreamdev/react-swipeable-list';
import { Dimmer, Loader } from 'semantic-ui-react';

import ControlTodo from './ControlTodo.js';
import permissions from '../../../utils/permissions.js';

const TodoList = () => {
  const loading = useSelector((state) => state.todos.loading);
  const store = useSelector((state) => state.todos.todos);
  const permission = useSelector((state) => state.user.permission_level);
  const dispatch = useDispatch();
  const [todos, setTodos] = useState([]);
  const [todones, setTodones] = useState([]);

  const canCreateTodo = () => permission >= permissions.REGULAR;

  useEffect(() => {
    dispatch(actions.todo.fetchTodos());
    dispatch(actions.houseHold.fetchHousehold());
  }, [dispatch]);

  useEffect(() => {
    const incomplete = store.filter((todo) => todo.completed === false);
    const complete = store.filter((todo) => todo.completed === true);
    setTodos(incomplete);
    setTodones(complete);
  }, [store]);

  return (
    <section>
      {loading ? (
        <Dimmer active inverted>
          <Loader size="large">Loading</Loader>
        </Dimmer>
      ) : (
        <div>
          <h3>Todo</h3>
          <div className="todos-list">
            <SwipeableList>
              {todos.map((todo) => {
                return <Todo key={todo.id} {...todo} />;
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
      {canCreateTodo() && <ControlTodo />}
    </section>
  );
};

export default TodoList;

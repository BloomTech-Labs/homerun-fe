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
  const user_id = useSelector((state) => state.user.id);
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

  const todoOrdering = (a, b) => {
    let a_assigned = a.assigned.find((member) => member.id === user_id);
    let b_assigned = b.assigned.find((member) => member.id === user_id);
    if ((a_assigned && b_assigned) || (!a_assigned && !b_assigned)) {
      // if they are both assigned or both not assigned they have no preferential ordering
      return 0;
    } else if (a_assigned && !b_assigned) {
      // if todo A is assigned to the user but not todo B, A should appear before B
      return -1;
    } else {
      // vise versa from above
      return 1;
    }
  };

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
              {todos.sort(todoOrdering).map((todo) => {
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
        </div>
      )}
    </section>
  );
};

export default TodoList;

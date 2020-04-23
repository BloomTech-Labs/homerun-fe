import React, { useState, useEffect, useRef } from "react";
import { List, Dropdown } from "semantic-ui-react";
import Todo from "./Todo.js";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../actions/index.js";
import { SwipeableList } from "@sandstreamdev/react-swipeable-list";

import ControlTodo from "./ControlTodo.js";

import dayjs from "dayjs";

const TodoList = () => {
  const store = useSelector((state) => state.todos);
  const currentUser = useSelector((state) => state.user);
  const userIsChild = useSelector((state) => state.user.childActive);
  const dispatch = useDispatch();

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
      <div style={{ margin: "50px 0px" }}>
        <SwipeableList>
          {todos.map((todo) => {
            return <Todo key={todo.id} {...todo} />;
          })}
        </SwipeableList>
      </div>

      {/* Conditionally render the todos based on completion. */}
      <h3>Todone</h3>
      <div style={{ opacity: "0.4" }}>
        <SwipeableList>
          {todones.map((todo) => {
            return <Todo key={todo.id} {...todo} />;
          })}
        </SwipeableList>
      </div>
      {!currentUser.childActive ? <ControlTodo /> : ""}
    </section>
  );
};

export default TodoList;

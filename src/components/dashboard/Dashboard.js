import React from "react";
import TodoList from "./todos/TodoList.js";
import TodoForm from "./todo-form/TodoForm.js";
import { Button } from "semantic-ui-react";
import AddTodoBtn from './add-todo/AddTodoBtn.js';

import "../../SASS/Dashboard.scss";

const Dashboard = props => {
  return (
    <>
      <h1>Dashboard</h1>
      <Button
        onClick={() => {
          localStorage.removeItem("token");
          props.history.push("/signin");
        }}
      >
        Logout
      </Button>
      <TodoList />
      <AddTodoBtn />
    </>
  );
};

export default Dashboard;

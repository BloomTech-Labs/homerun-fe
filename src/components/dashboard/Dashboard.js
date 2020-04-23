import React from "react";
import TodoList from "./todos/TodoList.js";
import { Button } from "semantic-ui-react";

const Dashboard = props => {
  return (
    <section className="ui container">
      <TodoList />
    </section>
  );
};

export default Dashboard;

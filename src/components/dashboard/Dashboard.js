import React, { useState } from "react";
import TodoList from "./todos/TodoList.js";
import { Button } from "semantic-ui-react";

import "../../SASS/Dashboard.scss";
import CategoryTabs from "./Categories/CategoryTabs.js";

const Dashboard = props => {
  return (
    <section className="ui container">
      <CategoryTabs />
      <TodoList />
    </section>
  );
};

export default Dashboard;

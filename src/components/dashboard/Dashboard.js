import React from "react";
import { Button } from 'semantic-ui-react';
import TodoForm from "./TodoForm.js";

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
      <TodoForm />
    </>
  );
};

export default Dashboard;

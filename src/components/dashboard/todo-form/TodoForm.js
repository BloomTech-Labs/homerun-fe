import React, {useState} from "react";

import { Form, Input, Button} from "semantic-ui-react";


import "../../../SASS/TaskForm.scss";
import "../../../SASS/TodoList.scss";


const TodoForm = () => {
  return (
    <Form className="ui right icon input taskForm">
      <Input type="text" placeholder="Task" />
    </Form>
  );
};




export default TodoForm;

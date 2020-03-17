import React, {useState} from "react";
import { Form, Input, Dropdown as SemanticDropDown } from "semantic-ui-react";


import "../../../SASS/TaskForm.scss";
import "../../../SASS/TodoList.scss";


const options = [
  { key: '1', text: 'Mom', value: 'Mom' },
  { key: '2', text: 'Dad', value: 'Dad' },
  { key: '3', text: 'Daughter', value: 'Daughter' },
  { key: '4', text: 'Son', value: 'Son' },
]


const TodoForm = () => {
  return (
    <Form className="ui right icon input taskForm">
      <Input type="text" placeholder="Task" /> <br></br>
    </Form>
  );
};




export default TodoForm;

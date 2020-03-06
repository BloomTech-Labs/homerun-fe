import React from "react";

import { Form, Input, Icon, Button } from "semantic-ui-react";

import "../../SASS/TaskForm.scss";

const TodoForm = () => {
  return (
    <Form className="ui right icon input taskForm">
      <Input type="text" placeholder="Task" />
      <Button className="ui primary button">
        <Icon aria-hidden="true" className="add user icon" />
      </Button>
      <Button className="ui positive button">
        <Icon aria-hidden="true" className="clock icon" />
      </Button>
    </Form>
  );
};

export default TodoForm;

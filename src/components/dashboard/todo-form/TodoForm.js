import React, {useState} from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { Form, Input, Icon, Button, Modal, Header, Dropdown as SemanticDropDown } from "semantic-ui-react";
import "react-datepicker/dist/react-datepicker.css";

import "../../../SASS/TaskForm.scss";
import "../../../SASS/TodoList.scss";
dayjs.extend(advancedFormat);


const options = [
  {icon: 'member', text: 'Mom' , value: 'Mom'},
  {icon: 'member', text: 'Dad' , value: 'Dad'},
  {icon: 'member', text: 'Daughter' , value: 'Daughter'},
  {icon: 'member', text: 'Son' , value: 'Son'},

]


const TodoForm = () => {
  return (
    <Form className="ui right icon input taskForm">
      <Input type="text" placeholder="Task" />
    </Form>
  );
};




export default TodoForm;

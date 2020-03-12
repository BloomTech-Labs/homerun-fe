import React from "react";
import TodoForm from "./TodoForm";

import { Form, Input, Icon, Button, Modal, Header, Dropdown as SemanticDropDown } from "semantic-ui-react";

import "../../../SASS/TaskForm.scss";


const options = [
    {icon: 'member', text: 'Mom' , value: 'Mom'},
    {icon: 'member', text: 'Dad' , value: 'Dad'},
    {icon: 'member', text: 'Daughter' , value: 'Daughter'},
    {icon: 'member', text: 'Son' , value: 'Son'},
  
  ]
  

const ModalButton = () => {
    return (
      <Button className="ui primary button">
          <Icon aria-hidden="true" className="add" />
  
        </Button>
    )
  }

  const AddTodoBtn = () => (
    <Modal trigger={ModalButton()}>
      <Modal.Header> Task Details </Modal.Header>
       <TodoForm></TodoForm>
        </Modal>


  )

  export default AddTodoBtn;
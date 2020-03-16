import React from "react";
import TodoForm from "../todo-form/TodoForm";

import {Button, Modal, Icon} from "semantic-ui-react";


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













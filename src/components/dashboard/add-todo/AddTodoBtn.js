import React from "react";

import { Button, Modal, Dropdown, Icon } from 'semantic-ui-react';

import AssignTime from './AssignTime.js';

  const AddTodoBtn = () => (
    <Button className="ui primary button">
          <Icon aria-hidden="true" className="add" />

        </Button>
  )

  const AddTodoModal = () => {

    const options = [
      {icon: 'member', text: 'Mom' , value: 'Mom'},
      {icon: 'member', text: 'Dad' , value: 'Dad'},
      {icon: 'member', text: 'Daughter' , value: 'Daughter'},
      {icon: 'member', text: 'Son' , value: 'Son'},
    
    ]

    return (
      <Modal centered trigger={AddTodoBtn()}>
        <Modal.Header> Task Details </Modal.Header>
        <Modal.Content>
        <Modal.Description> Who would you like to assign this task? </Modal.Description>
        <Dropdown
            className= 'button icon'
            floating
            options={options}
            trigger={<React.Fragment />} 
              />
              <AssignTime></AssignTime>

        </Modal.Content>
      </Modal>
    )
  }


  export default AddTodoModal;













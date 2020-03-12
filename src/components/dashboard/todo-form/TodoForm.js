import React from "react";

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
        <Icon aria-hidden="true" className="add user icon" />

      </Button>
  )
}

const timeModal = () => {
  return (
    <Button className="ui positive button">
    <Icon aria-hidden="true" className="clock icon" />
  </Button>

  )
}

const TodoForm = () => {
  return (
    <Form className="ui right icon input taskForm">
      <Input type="text" placeholder="Task" />

      <AssignMember> </AssignMember>
<AssignTime>  </AssignTime>
      
    </Form>
  );
};



const AssignMember = () => (
  <Modal trigger={ModalButton()}>
    <Modal.Header> Assign a Member to a task</Modal.Header>
      <SemanticDropDown
        className= 'button icon'
        floating
        options={options}
         trigger={<React.Fragment />} 
          />
      </Modal>
)


const AssignTime = () => (
  
  <Modal trigger={timeModal()}>
  <div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-header">
    <h3 id="myModalLabel">Date/Time Picker</h3>
  </div>
  <div class="modal-body">
    <div id="datetimepicker1" class="input-append date">
      <input data-format="dd/MM/yyyy hh:mm:ss" type="text"></input>
      <span class="add-on"><i data-time-icon="icon-time" data-date-icon="icon-calendar"></i></span>
    </div>
  </div>
  <div class="modal-footer">
    <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
  </div>

  
</div>


        
  </Modal>




)

export default TodoForm;

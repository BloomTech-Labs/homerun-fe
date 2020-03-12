import React, {useState} from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat"
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


<<<<<<< HEAD
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


        
=======
// const AssignTime = () => (
//   <Modal trigger={timeModal()}>
//   <div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
//   <div class="modal-header">
//     <h3 id="myModalLabel">Date/Time Picker</h3>
//   </div>
//   <div class="modal-body">
//     <div id="datetimepicker1" class="input-append date">
//       <input data-format="dd/MM/yyyy hh:mm:ss" type="text"></input>
//       <span class="add-on"><i data-time-icon="icon-time" data-date-icon="icon-calendar"></i></span>
//     </div>
//   </div>
//   <div class="modal-footer">
//     <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
//   </div>

  
// </div> 
//   </Modal>
// )

const AssignTime = () => {
  const [startDate, setStartDate] = useState(new Date());
  const futureDate = dayjs(startDate.toString()).format("x");
  console.log(<DatePicker />, "This is the date picker")
  return (
  <Modal trigger={timeModal()}>
    <Modal.Header>Set Time</Modal.Header>
    <Modal.Content datepicker>
      <Modal.Description>
      <DatePicker 
      wrapped size = "medium"
      className = "date-picker"
      selected = {startDate}
      onChange = {date => setStartDate(date)}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      minDate={new Date()}
      timeCaption="time"
      dateFormat ="MMMM d, yyyy h:mm aa"
       />
      </Modal.Description> 
    </Modal.Content>
>>>>>>> 48d6686484f1dfff37685f581f7c168434c6c50b
  </Modal>
)}

export default TodoForm;

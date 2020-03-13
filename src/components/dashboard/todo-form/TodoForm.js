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
  </Modal>
)}

export default TodoForm;

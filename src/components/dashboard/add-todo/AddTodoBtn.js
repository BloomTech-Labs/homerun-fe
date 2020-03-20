import React, { useState } from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import axiosWithAuth from "../../../utils/AxiosWithAuth";
import { Button, Modal, Form, Icon } from "semantic-ui-react";
dayjs.extend(advancedFormat);

const AddTodoBtn = ({ todo, toggleCompleted, completed, deleteTodo }) => {
  const [info, setInfo] = useState({
    title: "",
    desc: "",
    due: null,
    created_at: Date.now(),
  })
  const [due, setDue] = useState(new Date());
  const futureDate = dayjs(due.toString()).format('x')

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
    console.log(info.created_at, "this is created date")
  }

  const handleSubmit = () => {
    // Currently sending an empty object
    console.log("Getting the info setup", info)
    axiosWithAuth()
      .post(`/todos/add`, info)
      .then(res => {
        console.log("Res AddTodoBtn :31", res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }



  const handleTime = (date) => {
    setDue(date)
    console.log(date, "this is the due date")
    setInfo({ ...info, due: futureDate })
  }

  return (
    <Modal trigger={
      <Button className="ui primary button">
        <Icon aria-hidden="true" className="add" />
      </Button>
    }>
      <Modal.Header> Add a new task below! </Modal.Header>
      <Form onSubmit={handleSubmit} style={{ padding: "30px" }}>
        <Form.Input name="title" onChange={handleChange} type="text" placeholder="Task" />
        <Form.Input name="desc" onChange={handleChange} type="text" placeholder="Description" />
        <Form.Field>
          <h3> Pick Date/Time below</h3>
          <DatePicker
            wrapped size="medium"
            className="date-picker"
            selected={due}
            onChange={handleTime}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            minDate={new Date()}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </Form.Field>
        <Button type="submit">Add</Button>
      </Form>
    </Modal>
  )
}

export default AddTodoBtn;


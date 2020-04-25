import React, { useState } from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { Button, Modal, Form } from "semantic-ui-react";
import { useSelector, useDispatch } from 'react-redux'
import actions from '../../../actions/index.js';

dayjs.extend(advancedFormat);

const ControlTodo = () => {
  const [info, setInfo] = useState({
    title: "",
    desc: "",
    due: dayjs().unix(),
    completed: false,
    created_at: dayjs().unix(),
  })

  const category = useSelector(state => state.todos.currentCategory);
  const dispatch = useDispatch()

  const [due, setDue] = useState(new Date());
  const [showModal, setShowModal] = useState(false)
  const futureDate = dayjs(due).unix()

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }

  const handleModal = () => {
    setShowModal(!showModal)
  }

  const handleSubmit = () => {
    dispatch(actions.todo.addTodo(info))
      .then(res => {
        dispatch(actions.todo.addCategory({ todo_id: res.id, category_name: category }))
      })
    handleModal()
  }

  const handleDue = (date) => {
    setDue(date)
    setInfo({ ...info, due: futureDate })
  }


  return (
    <div>
      <Modal open={showModal} onClose={handleModal}>
        <Modal.Header> Add a new task below! </Modal.Header>
        <Form onSubmit={handleSubmit} style={{ padding: "30px" }}>
          <Form.Input name="title" onChange={handleChange} type="text" placeholder="Task" />
          <Form.Input name="desc" onChange={handleChange} type="text" placeholder="Description" />
          <Form.Field>
            <h3>Due</h3>
            <DatePicker
              wrapped size="medium"
              className="date-picker"
              selected={due}
              onChange={handleDue}
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
      <button className="ui button blue circular" onClick={handleModal} style={{ position: "fixed", bottom: 20, right: 20 }}>Add Todo</button>
    </div>
    
  )
}

export default ControlTodo;


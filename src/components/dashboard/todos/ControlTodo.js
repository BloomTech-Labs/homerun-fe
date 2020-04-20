import React, { useState } from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import axiosWithAuth from "../../../utils/AxiosWithAuth";
import {Link} from 'react-router-dom';
import { Button, Modal, Form, Icon } from "semantic-ui-react";
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
  const store = useSelector(state => state.todos);
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
    handleModal()
  }
  const handleDue = (date) => {
    setDue(date)
    setInfo({ ...info, due: futureDate })
  }
  return (
    <div>
      
      <Modal open={showModal} onClose={handleModal}>
      <div className="wrap-container">
        <span className="contact100-form-symbol">
         <Icon size="huge" className="add"/>
        </span>
        <Form onSubmit={handleSubmit} style={{ padding: "30px" }}>
        <div className="form-title">
        Add a new task below!
      </div>
      <Form.Field>
        <label>Title</label>
        <input
          className="form-wrap"
          name="title"
          onChange={handleChange} 
          type="text"
          placeholder="Task"
        />
      </Form.Field>

      <Form.Field>
        <label>Description</label>
        <input
          className="form-wrap"
          name="desc"
          onChange={handleChange} 
          type="text"
          placeholder="Description"
        />
      </Form.Field>

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
          <div className="container-contact100-form-btn">
        <button className="submit"> Add </button>
                  </div>
        </Form>
      </div>
      </Modal>
      <button className="ui button blue circular" onClick={handleModal} style={{ position: "absolute", bottom: 20, right: 20 }}>Add Todo</button>
    </div>
  )
}
export default ControlTodo;
import React, { useState } from "react";
import TodoForm from "../todo-form/TodoForm";
import AssignTime from "../add-todo/AssignTime";
import axios from "axios";

import {Button, Modal, input, Form, Icon, Dropdown as SemanticDropDown} from "semantic-ui-react";

import styled from "styled-components";
import { checkPropTypes } from "prop-types";
import axiosWithAuth from "../../../utils/AxiosWithAuth";

const options = [
  { key: '1', text: 'Mom', value: 'Mom' },
  { key: '2', text: 'Dad', value: 'Dad' },
  { key: '3', text: 'Daughter', value: 'Daughter' },
  { key: '4', text: 'Son', value: 'Son' },
]


  const AddTodoBtn = ({todo, toggleCompleted, completed, deleteTodo}) => {
    const [ info, setInfo ] = useState({
      title: "",
      due: null,
      created_at: Date.now(),
      child: false
    })

    console.log("Line 46 AddTodoBtn.js", info)

    const handleChange = (e) => {
      setInfo({...info, [e.target.name]: e.target.value })
    }
    const handleCheck = (e) => {
      setInfo({...info, child: !info.child })
    }

    const handleSubmit = () => {
    axios
    .post(`https://stage-homerun-be.herokuapp.com/todos/household`)
    .then(res => {
      console.log(res.data, res, "res")
    })
    .catch(err => {
      console.log(err)
    })
    }  

    return(
      <Modal trigger={
          <Button className="ui primary button">
            <Icon aria-hidden="true" className="add" />
          </Button>
        }>
        <Modal.Header> Add a new task below! </Modal.Header>
          <Form className="form-inline"
          onSubmit = {handleSubmit}
          >
            <Form.Group widths='equal'>
            <Form.Input name="title" onChange={handleChange} type="text" placeholder="Task" /> <br></br>
            
          </Form.Group>
            <h3> Pick Date/Time below</h3>
            <AssignTime setInfo={setInfo} info={info}></AssignTime> <br></br>
          {/* <Form.Select name="" onChange={handleChange} options={options} placeholder='Household Member' error /> <br></br> */}
          <Form.Checkbox name="child" onChange={handleCheck} label='This member is a Child' error /><br></br>
          <Button type = "submit" > add</Button>
        </Form>
      </Modal>
    )
  }

  export default AddTodoBtn;


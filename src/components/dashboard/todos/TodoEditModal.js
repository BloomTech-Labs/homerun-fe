import React, { useState } from "react";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { Button, Modal, Form } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import actions from "../../../actions/index.js";

dayjs.extend(advancedFormat);

const TodoEditModal = ({ todo, open, setOpened }) => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState({
    id: todo.id,
    title: todo.title,
  });

  const handleChange = (e) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(actions.todo.updateTodo(newTodo.id, newTodo));
    handleClose();
  };

  const handleClose = () => {
    setOpened(false);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Modal.Header>{`Edit Todo`}</Modal.Header>
      <Form onSubmit={handleSubmit} style={{ padding: "30px" }}>
        <Form.Input
          name="title"
          onChange={handleChange}
          value={newTodo.title}
          type="text"
        />
        <Button type="submit">Edit</Button>
      </Form>
    </Modal>
  );
};

export default TodoEditModal;

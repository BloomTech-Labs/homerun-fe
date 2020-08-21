import React, { useState } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import actions from '../../../actions/index.js';

const CategoryAddModal = ({ open, setOpened }) => {
  const dispatch = useDispatch();
  // const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    category_name: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(form);
    dispatch(actions.categories.addCategory(form));
    handleClose();
  };
  const handleClose = () => {
    setOpened(false);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Modal.Header>{`Add Category`}</Modal.Header>
      <Form onSubmit={handleSubmit} style={{ padding: '30px' }}>
        <Form.Input
          name="category_name"
          onChange={handleChange}
          value={form.category_name}
          type="text"
        />
        <Button type="submit">Add</Button>
      </Form>
    </Modal>
  );
};

export default CategoryAddModal;

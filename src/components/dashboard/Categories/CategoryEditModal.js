import React, { useState } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import actions from '../../../actions/index.js';

const CategoryEditModal = ({ category, open, setOpened }) => {
  const dispatch = useDispatch();
  const [newCategory, setNewCategory] = useState({
    id: category.id,
    category_name: category.category_name,
  });

  const handleChange = (e) => {
    setNewCategory({ ...newCategory, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(
      actions.categories.updateCategory(category.id, newCategory.category_name)
    );
    handleClose();
  };

  const handleClose = () => {
    setOpened(false);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Modal.Header>{`Edit Category`}</Modal.Header>
      <Form onSubmit={handleSubmit} style={{ padding: '30px' }}>
        <Form.Input
          name="category_name"
          onChange={handleChange}
          value={newCategory.title}
          type="text"
          defaultValue={category.category_name}
        />
        <Button type="submit">Edit</Button>
      </Form>
    </Modal>
  );
};

export default CategoryEditModal;

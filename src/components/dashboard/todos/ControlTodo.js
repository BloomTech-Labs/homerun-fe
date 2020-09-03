import React, { useState, useEffect } from 'react';
import DatePicker from '../../../utils/DatePicker.js';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { Button, Modal, Form, Icon } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../../actions/index.js';

dayjs.extend(advancedFormat);

const ControlTodo = () => {
  const [info, setInfo] = useState({
    title: '',
    desc: '',
    due: null,
    completed: false,
    created_at: dayjs(new Date()).unix(),
    category_id: '',
  });

  const category = useSelector((state) => state.todos.currentCategory);
  const categories = useSelector((state) => state.categories.categories);
  const currentCat = categories.filter((cat) => {
    return cat.category_name === category;
  });
  let currentCatID = '';

  useEffect(() => {
    if (currentCat.length === 1) {
      currentCatID = currentCat[0].id;
    }
    setInfo({ ...info, category_id: currentCatID });
  }, [category]);

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const categoryOptions = categories.map((cat) => {
    return {
      key: cat.id,
      value: cat.id,
      text: cat.category_name,
    };
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e, { value }) => {
    setInfo({ ...info, category_id: value });
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = () => {
    dispatch(actions.todo.addTodo(info));
    handleModal();
  };

  const handleDue = (date) => {
    setInfo({ ...info, due: dayjs(date).unix() });
  };

  return (
    <div>
      <Modal open={showModal} onClose={handleModal}>
        <Modal.Header>{`Add a New  Todo`}</Modal.Header>
        <Form onSubmit={handleSubmit} style={{ padding: '30px' }}>
          <Form.Input
            name="title"
            onChange={handleChange}
            type="text"
            placeholder="Task"
            label="Task"
          />
          <Form.Select
            onChange={handleSelectChange}
            name="category_id"
            options={categoryOptions}
            defaultValue={info.category_id}
            label="Category"
          />
          <Form.Field>
            <h3>Due</h3>
            <DatePicker onChange={handleDue} />
          </Form.Field>
          <Button type="submit">Add</Button>
        </Form>
      </Modal>
      <button
        className="ui button orange circular"
        onClick={handleModal}
        style={{ position: 'fixed', bottom: 55, right: 20 }}
      >
        <Icon name="plus" />
        {`Todo`}
      </button>
    </div>
  );
};

export default ControlTodo;

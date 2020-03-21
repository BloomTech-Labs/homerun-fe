import React from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
const AddChild = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (e) => {
    e.preventDefault();
    props.setModal(false)
  }
    return (
            <Form>
              <Form.Field>
                <label>Name</label>
                <input placeholder='Member' />
              </Form.Field>
              <Button onClick={onSubmit} floated='right' primary type='submit'>Add</Button>
            </Form>
          )
}

export default AddChild;
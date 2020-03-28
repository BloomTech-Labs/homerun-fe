import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import axiosWithAuth from "../../utils/AxiosWithAuth";
import { useDispatch } from 'react-redux';
import actions from '../../actions';

const AddChild = props => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data, e) => {
    e.preventDefault();
    // axiosWithAuth()
    //   .post("/members/household/children", data)
    //   .then(res => {
    //     console.log(res);
    //     props.setModal(false);
    //   });
      dispatch(actions.houseHold.addChild(data));
      props.setModal(false);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Field>
        <label>Name</label>
        <input
          name="username"
          placeholder="Child's Name"
          ref={register({ required: "Please give the child a name." })}
        />
        {errors.username && <p>{errors.username.message}</p>}
      </Form.Field>
      <Button floated="right" primary type="submit">
        Add
      </Button>
    </Form>
  );
};

export default AddChild;

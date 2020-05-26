import React from "react";
import { Button, Form } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import actions from "../../actions";

const AddChild = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(actions.houseHold.addChild(data));
    props.setModal(false);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Field>
        <label>Please enter the name of your child you wish to add.</label>
        <input
          name="username"
          placeholder="Child's Name"
          ref={register({ required: "Please give the child a name." })}
        />
        {errors.username && (
          <p className={"error"}>{errors.username.message}</p>
        )}
      </Form.Field>
      <Button primary type="submit">
        Add
      </Button>
    </Form>
  );
};

export default AddChild;

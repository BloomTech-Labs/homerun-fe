import React from "react";
import { Button, Checkbox, Form, Icon } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import actions from '../../actions';
import {Link} from 'react-router-dom';

const AddChild = props => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(actions.houseHold.addChild(data));
    props.setModal(false);
  };
  return (
    <div className="container-contact100">
    <div className="wrap-container">
    <span className="contact100-form-symbol">
         <Icon size="huge" className="child"/>
    </span>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-title">
        Add a Child!
      </div>
      <Form.Field>
        <label>Name</label>
        <input
          className="form-wrap"
          name="username"
          placeholder="Child's Name"
          ref={register({ required: "Please give the child a name." })}
        />
        {errors.username && <p>{errors.username.message}</p>}
      </Form.Field>
      <div className="container-contact100-form-btn">
        <button className="submit"> Add </button>
        <button 
           className="back"><Link to ={"/household"}>Back</Link> </button>
                  </div>
    </Form>
    </div>
    </div>
  );
};

export default AddChild;

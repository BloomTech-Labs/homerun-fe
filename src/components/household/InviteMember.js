import React from "react";
import { Button, Form, Loader, Dimmer } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actions';


const InviteMember = (props) => {
  const { register, handleSubmit, errors} = useForm();
  const dispatch = useDispatch();
  const stateError = useSelector(state => state.household.error)
  const loadingState = useSelector(state => state.household.loading);

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(actions.houseHold.inviteMember(data, props.setModal));
  }
  return loadingState ? (<Dimmer active inverted><Loader size="large">Loading</Loader></Dimmer>)
    : (
      <>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Field>
            <label>Please Enter the email address of the user you wish to invite.</label>
            <input type='email' name='email' placeholder='user@email.com' ref={register} />
            {stateError && <p className={'error'}>{stateError}</p>}
          </Form.Field>
          <Button primary type='submit'>Invite</Button>
        </Form>
      </>
    )

}

export default InviteMember;
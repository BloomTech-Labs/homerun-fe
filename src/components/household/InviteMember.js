import React, { useState, useEffect } from "react";
import {Button, Icon, Header, Form, Container, Loader, Dimmer } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actions';
import "antd/lib/alert/style/css";
import '../../SASS/InviteMember.scss';

import { Alert } from 'antd';

const InviteMember = (props) => {
  const { register, handleSubmit} = useForm();
  const dispatch = useDispatch();
  const stateError = useSelector(state => state.household.error)
  const loadingState = useSelector(state => state.household.loading);

  const onSubmit = (data) => {
    dispatch(actions.houseHold.inviteMember(data, props.setModal));
  }
  console.log(stateError)
    return loadingState ? ( <Dimmer active inverted><Loader size="large">Loading</Loader></Dimmer>)
                     : (
                        <>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                          <Form.Field>
                            <label>Email</label>
                            <input type='email' name='email' placeholder='user@email.com' ref={register} />
                            {stateError && <p>{stateError}</p>}
                          </Form.Field>
                          <Button floated='right' primary type='submit'>Invite</Button>
                        </Form>
                       </>
                        )
          
}

export default InviteMember;
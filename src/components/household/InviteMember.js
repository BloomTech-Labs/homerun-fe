import React, { useState, useEffect } from "react";
import {Button, Icon, Header, Form, Container, Loader, Dimmer } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import axiosWithAuth from '../../utils/AxiosWithAuth.js';

const InviteMember = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => {
    setIsLoading(true);
    console.log(data);
    const axiosURL = props.inviteMember ?  '/members/household/invite' : props.addChild ? '/members/household/children' : null;
    axiosWithAuth().post(axiosURL, data)
      .then(res => {
        console.log("onSubmit -> res", res)
        
        props.setModal(false);
      })
      .catch(err => {
        console.log(err);
      })
  }
    return isLoading ? ( <Dimmer active inverted><Loader size="large">Loading</Loader></Dimmer>)
                     : (<Form onSubmit={handleSubmit(onSubmit)}>
                          <Form.Field>
                            <label>Email</label>
                            <input type='email' name='email' placeholder='user@email.com' ref={register({ required: "Email is invalid." })} />
                            {errors.email && <p>{errors.email.message}</p>}
                          </Form.Field>
                          <Button floated='right' primary type='submit'>Invite</Button>
                        </Form>)
          
}

export default InviteMember;
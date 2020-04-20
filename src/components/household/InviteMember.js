import React, { useState, useEffect } from "react";
import {Button, Icon, Header, Form, Container, Loader, Dimmer } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import actions from '../../actions';
import "antd/lib/alert/style/css";
import '../../SASS/InviteMember.scss';

import { Alert } from 'antd';

const InviteMember = (props) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const stateError = useSelector(state => state.household.error)
  const loadingState = useSelector(state => state.household.loading);

  const onSubmit = (data) => {
    dispatch(actions.houseHold.inviteMember(data, props.setModal));
  }
  console.log(stateError)
    return loadingState ? ( <Dimmer active inverted><Loader size="large">Loading</Loader></Dimmer>)
                     : (
                      <div className="container-contact100">
                      <div className="wrap-container">
                      <span className="contact100-form-symbol">
                           <Icon size="huge" className="address card"/>
                      </span>
                        <>
                        
                        <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-title">
                  Invite a user to your household
              </div>
                          <Form.Field>
                            <label>Email</label>
                            <input className= "wrap-input" type='email' name='email' placeholder='user@email.com' ref={register} />
                            {stateError && <p>{stateError}</p>}
                          </Form.Field>
                          <button
                            className="container-contact100-form-btn" 
                            type="submit"
                            value="Send Message"
                           />

              <div className="container-contact100-form-btn">
              <button className="submit"> Invite </button>
              <button 
           className="back"><Link to ={"/household"}>Back</Link> </button>
                      </div>
                        </Form>
                       </>
                       </div>
                       </div>
                        )
          
}

export default InviteMember;
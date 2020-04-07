import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown, Icon, Loader, Dimmer, Modal, Input, Button } from 'semantic-ui-react';

import axios from 'axios';
import actions from "../../actions";

const HouseholdSettings = () => {
  const members = useSelector(state => state.household.members);
  const currentUser = useSelector(state => state.users);
  const dispatch = useDispatch();
  const [dropDownValue, setDropDownValue] = useState(currentUser.username);
  const [modal, setModal] = useState(false);
  const [password, setPassword] = useState('');

  const dropdownOptions = members.map(member => {
    return { key: member.id, text: member.username, value: member.username }; 
  });
  
  const handleChange = (event, { value }) => {
    event.persist();
    if(event.target.type === 'password') {
      setPassword(event.target.value);
    } else {
      setDropDownValue(value);
      const [user] = members.filter(user => value === user.username);
      if(!user.child) { // no need to put in a password for a child user
        setModal(true);
      } else {
        dispatch(actions.user.changeUser(user))
      }
    }
  }

  const handleSubmit = event => {
    const [user] = members.filter(user => dropDownValue === user.username);
    event.preventDefault();
    dispatch(actions.user.changeUser({...user, password}))
  }

  return (
    <div>
      <h3>Household Settings</h3>
      <Dropdown selection onChange={handleChange} placeholder={`Welcome, ${currentUser.username}`} value={dropDownValue} fluid options={dropdownOptions} />
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        header="Please enter that users password to continue"
        content={(
          <>
        <Input onChange={handleChange} value={password} type='password' fluid placeholder={'Enter Password...'}/>
        <Button onClick={handleSubmit} content='Submit' />
        </>
        )}
      ></Modal>
    </div>
    );
};

export default HouseholdSettings;

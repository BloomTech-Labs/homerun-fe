import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown, Icon, Loader, Dimmer, Modal, Input, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
import actions from "../../actions";

const HouseholdSettings = () => {
  const members = useSelector(state => state.household.members);
  const currentUser = useSelector(state => state.user.userInfo);
  const dispatch = useDispatch();
  const [dropDownValue, setDropDownValue] = useState(currentUser.username);
  const [options, setOptions] = useState([]);
  const [modal, setModal] = useState(false);
  const [password, setPassword] = useState('');
  const history = useHistory();
  
  console.log("HouseholdSettings -> currentUser", currentUser)
 useEffect(() => {
   const children = members.filter(member => member.child).map(child => {
     return { key: child.id, text: child.username, value: child.username }
   });
   
    setOptions([...children, { key: currentUser.id, text: currentUser.username, value: currentUser.username }])
 }, [])
  
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
        dispatch(actions.user.setChild(user))
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
      <h3>Welcome {currentUser.username}</h3>
      <Dropdown selection onChange={handleChange} placeholder={`Welcome, ${currentUser.username}`} value={dropDownValue} fluid options={options} />
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        header="Please enter that users password to continue"
        content={(
          <>
        <Input loading onChange={handleChange} value={password} type='password' fluid placeholder={'Enter Password...'}/>
        <Button onClick={handleSubmit} content='Submit' />
        </>
        )}
      ></Modal>
    </div>
    );
};

export default HouseholdSettings;

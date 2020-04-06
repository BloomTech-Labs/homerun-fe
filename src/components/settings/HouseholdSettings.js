import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown, Icon, Loader, Dimmer } from 'semantic-ui-react';


const HouseholdSettings = () => {
  const members = useSelector(state => state.household.members);
  const currentUser = useSelector(state => state.users);
  console.log("HouseholdSettings -> currentUser", currentUser)

const trigger = (<span> <Icon name='user' /> Hello, {currentUser.username}</span>);
  const dropdownOptions = members.map(member => {
    return { key: member.id, text: member.username, value: member.username };
  });
  console.log("HouseholdSettings -> dropdownOptions", dropdownOptions)
  
  return (
    <div>
      <h3>Household Settings</h3>
      <Dropdown trigger={trigger} options={dropdownOptions} />
    </div>
    );
};

export default HouseholdSettings;

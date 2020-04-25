import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import actions from "../../actions";

const ChildAccountDropdown = () => {
  const members = useSelector((state) => state.household.members);
  const dispatch = useDispatch();
  const [dropDownValue, setDropDownValue] = useState();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const children = members
      .filter((member) => member.child)
      .map((child) => {
        return { key: child.id, text: child.username, value: child.username };
      });

    setOptions(children);
  }, []);

  const handleChange = (event, { value }) => {
    event.persist();
    setDropDownValue(value);
    const [user] = members.filter((user) => value === user.username);
    dispatch(actions.user.setChild(user));
  };

  return (
    <Dropdown
      selection
      onChange={handleChange}
      placeholder={`Please select a child.`}
      default={`Please select a child.`}
      value={dropDownValue}
      fluid
      options={options}
    />
  );
};

export default ChildAccountDropdown;

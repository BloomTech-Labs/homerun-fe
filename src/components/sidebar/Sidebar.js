import React, { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import {
  Sidebar as SemSidebar,
  Segment,
  Icon,
  Divider,
  Menu,
  Button,
} from "semantic-ui-react";

const Sidebar = (props) => {
  const { opened, setOpened } = props;
  const history = useHistory();
  return (
    <SemSidebar
      className="settings"
      as={Menu}
      animation="overlay"
      icon="labeled"
      vertical
      direction="right"
      visible={opened}
      width="wide"
      onHide={() => setOpened(false)}
    >
      <SemSidebar.Pushable
        as={Segment}
        onClick={() => {
          setOpened(false);
        }}
      >
        {/* <Icon name="close" /> */}
        <Menu.Item name="Account" as={NavLink} to="/dashboard">
          <Icon name="user" />
          Dashboard
        </Menu.Item>
        <Menu.Item name="Household" as={NavLink} to="/household">
          <Icon name="home" />
          Household
        </Menu.Item>
        <Menu.Item name="Account" as={NavLink} to="/account">
          <Icon name="user" />
          Account
        </Menu.Item>
        <Button
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("state");
            history.push("/signin");
          }}
        >
          Logout
        </Button>
      </SemSidebar.Pushable>
    </SemSidebar>
  );
};

export default Sidebar;

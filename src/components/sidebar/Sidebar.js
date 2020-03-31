import React, { useState } from "react";
import {
  Sidebar as SemSidebar,
  Segment,
  Icon,
  Divider,
  Menu
} from "semantic-ui-react";
import Settings from "../allSettings/Settings.js";

const Sidebar = props => {
  const { opened, setOpened } = props;
  const [active, setActive] = useState(null);
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
      <SemSidebar.Pushable as={Segment}>
        <Menu.Item
          name="Close"
          onClick={() => {
            setOpened(false);
            setActive(null);
          }}
        >
          <Icon name="close" />
          Close
        </Menu.Item>
        <Menu.Item name="Account" onClick={() => setActive("account")}>
          <Icon name="user" />
          Account
        </Menu.Item>
        <Menu.Item name="Household" onClick={() => setActive("household")}>
          <Icon name="home" />
          Household
        </Menu.Item>
        <Settings active={active} />
      </SemSidebar.Pushable>
    </SemSidebar>
  );
};

export default Sidebar;

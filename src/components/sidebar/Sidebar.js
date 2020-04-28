import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import {
  Sidebar as SemSidebar,
  Segment,
  Icon,
  Menu,
  Button
} from "semantic-ui-react";

const Sidebar = (props) => {
  const { opened, setOpened } = props;
  const history = useHistory();
  return (
    <SemSidebar
      as={Menu}
      animation="overlay"
      vertical
      direction="right"
      visible={opened}
      width="wide"
      onHide={() => setOpened(false)}
    >
      <span
        className="close-sidebar"
        onClick={() => {
          setOpened(false);
        }}
        style={{ position: "absolute", top: "79px", right: "48px" }}
      >
        <span
          className="bm-cross"
          style={{
            position: "absolute",
            width: "3px",
            height: "14px",
            transform: "rotate(45deg)",
          }}
        ></span>
        <span
          className="bm-cross"
          style={{
            position: "absolute",
            width: "3px",
            height: "14px",
            transform: "rotate(-45deg)",
          }}
        ></span>
      </span>
      <SemSidebar.Pushable
        as={Segment}
        onClick={() => {
          setOpened(false);
        }}
      >
        <Menu.Item name="Account" as={NavLink} to="/dashboard">
          Dashboard
        </Menu.Item>
        <Menu.Item name="Household" as={NavLink} to="/household">
          Household
        </Menu.Item>
        <Menu.Item name="Account" as={NavLink} to="/account">
          Account
        </Menu.Item>
        <Button
          className="logout-btn"
          primary
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

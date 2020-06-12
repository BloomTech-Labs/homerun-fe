import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import {
  Sidebar as SemSidebar,
  Segment,
  Menu,
  Button,
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
      data-testid="sidebar"
    >
      <span
        className="close-sidebar"
        onClick={() => {
          setOpened(false);
        }}
        style={{ position: "absolute", top: "79px", right: "48px" }}
        data-testid="close-button"
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
        <Menu.Item name="Account" as={NavLink} to="/dashboard" data-testid="link-dashboard">
          Dashboard
        </Menu.Item>
        <Menu.Item name="Household" as={NavLink} to="/household" data-testid="link-household">
          Household
        </Menu.Item>
        <Menu.Item name="Account" as={NavLink} to="/account" data-testid="link-account">
          Account
        </Menu.Item>
        <Button
          className="logout-btn hive"
          primary
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("state");
            history.push("/signin");
          }}
          data-testid="logout-btn"
        >
          Logout
        </Button>
      </SemSidebar.Pushable>
    </SemSidebar>
  );
};

export default Sidebar;

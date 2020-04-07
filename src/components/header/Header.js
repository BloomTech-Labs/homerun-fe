import React, { useState, useEffect } from "react";

import { useSelector } from 'react-redux';

import Notifications from "./Notifications.js";
import PinNumber from "./PinNumber.js";
import Sidebar from "../sidebar/Sidebar.js";

import "../../SASS/Header.scss";

import { useLocation } from "react-router-dom";

import {
  Header as UiHeader,
  Icon,
  Image,
  Segment,
  Menu,
  Button
} from "semantic-ui-react";

const Header = props => {
  // If child is true, we'll need conditionally render the contents of account settings. Props or useSelector()
  const { child } = props;

  // location is an object that contains the current url path on the 'pathname' property
  const location = useLocation();
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const currentUser = useSelector(state => state.user.userInfo);

  useEffect(() => {
    if(currentUser.child) {
      setSidebarOpened(false);
    }
  }, [currentUser])

  return (
    <>
      <div className="header-container">
        {location.pathname === "/household" ? <PinNumber /> : <Notifications />}
        <UiHeader as="h3">
          {location.pathname === "/household" ? "Setup Household" : "Dashboard"}
        </UiHeader>
        <Button
          disabled={currentUser.child ? true : false}
          onClick={() => setSidebarOpened(!sidebarOpened)}
          className="header-btns"
        >
          <Icon className="icons-size" size="big" name="cog" />
        </Button>
      </div>
      <Sidebar setOpened={setSidebarOpened} opened={sidebarOpened} />
      {/* TODO -> background needs to be dimmed when settings is activated */}
    </>
  );
};

export default Header;

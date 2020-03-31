import React, { useState } from "react";

import Notifications from "./Notifications.js";
import PinNumber from "./PinNumber.js";
import Settings from "../allSettings/Settings.js";
import Sidebar from "../sidebar/Sidebar.js";

import "../../SASS/Header.scss";

import { useLocation } from "react-router-dom";

import {
  Header as UiHeader,
  Icon,
  Image,
  Segment,
  Menu
} from "semantic-ui-react";

const Header = props => {
  // If child is true, we'll need conditionally render the contents of account settings. Props or useSelector()
  const { child } = props;

  // location is an object that contains the current url path on the 'pathname' property
  const location = useLocation();
  const [sidebarOpened, setSidebarOpened] = useState(false);

  return (
    <>
      <div className="header-container">
        {location.pathname === "/household" ? <PinNumber /> : <Notifications />}
        <UiHeader as="h3">
          {location.pathname === "/household" ? "Setup Household" : "Dashboard"}
        </UiHeader>
        <button
          onClick={() => setSidebarOpened(!sidebarOpened)}
          className="header-btns"
        >
          <Icon className="icons-size" size="big" name="cog" />
        </button>
      </div>
      <Sidebar setOpened={setSidebarOpened} opened={sidebarOpened} />
      {/* TODO -> background needs to be dimmed when settings is activated */}
    </>
  );
};

export default Header;

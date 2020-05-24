import React from "react";
import ReactNotification from "react-notifications-component";

import { Icon } from "semantic-ui-react";

const Notifications = () => {
  return (
    <button className="header-btns">
      <Icon size="big" aria-hidden="true" className="bell" />
    </button>
  );
};
export default Notifications;

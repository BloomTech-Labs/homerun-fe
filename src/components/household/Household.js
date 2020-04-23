import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import List from "./List";

import "../../SASS/Household.scss";

import { Button, Icon } from "semantic-ui-react";
import { NavLink, Redirect } from "react-router-dom";
import { Row, Col } from "antd";

const Household = () => {
  return (
    <div className="household container">
      <List />
    </div>
  );
};

export default Household;

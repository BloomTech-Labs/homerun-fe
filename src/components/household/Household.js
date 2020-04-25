import React from "react";
import List from "./List";

import { NavLink } from "react-router-dom";
import { Row, Col } from "antd";

const Household = () => {
  return (
    <div className="household container">
      <List />
      <Row style={{ margin: "50px 0" }}>
        <Col span={24}>
          <NavLink className="dashboard-btn" to="/dashboard">
            <button className="ui button blue circular">Dashboard</button>
          </NavLink>
        </Col>
      </Row>
    </div>
  );
};

export default Household;

import React from "react";
import { NavLink } from "react-router-dom";
import { Row, Col } from "antd";

const Account = () => {
  return (
    <div className="account container">
      <Row style={{ margin: "50px 0" }}>
        <Col span={24}>
          <NavLink className="dashboard-btn" to="/dashboard">
            <h2>Account Stuff</h2>
          </NavLink>
        </Col>
      </Row>
    </div>
  );
};

export default Account;

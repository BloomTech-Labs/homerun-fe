import React from "react";
import { Row, Col } from "antd";
import ChildAccountDropdown from "./ChildAccountDropdown";

const Account = () => {
  return (
    <div data-testid="container" className="account container">
      <Row style={{ margin: "50px 0" }}>
        <Col span={24}>
          <h3>Switch to a Child Account</h3>
          <ChildAccountDropdown />
        </Col>
      </Row>
    </div>
  );
};

export default Account;

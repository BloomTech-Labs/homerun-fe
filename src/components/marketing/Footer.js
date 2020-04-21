import React from "react";
import { Row, Col } from "antd";

const Footer = () => {
  return (
    <Row justify="center" align="middle" className="footer">
      <Col span={24}>
        <footer>
          <p>&copy; Copyright TidyHive 2020</p>
        </footer>
      </Col>
    </Row>
  );
}

export default Footer;
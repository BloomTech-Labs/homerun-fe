import React from "react";
import { Button } from "semantic-ui-react";
import { Row, Col } from "antd";
import ChildAccountDropdown from "./ChildAccountDropdown";
import { useDispatch } from "react-redux";
import actions from "../../actions/index";

const Account = (props) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(actions.user.deleteUser(id));
    props.history.push(`/signup`);
  }

  return (
    <div className="account container">
      <Row style={{ margin: "50px 0" }}>
        <Col span={24}>
          <h3>Switch to a Child Account</h3>
          <ChildAccountDropdown />
        </Col>
        <Col span={24}>
          <h3>Want to delete your account?</h3>
          <Button onClick={handleDelete}>Delete</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Account;

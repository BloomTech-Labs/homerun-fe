/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Icon, Label, Popup } from "semantic-ui-react";
import { SwipeableListItem } from "@sandstreamdev/react-swipeable-list";
import SwipeLeft from "./SwipeLeft";
import SwipeRight from "./SwipeRight.js";
import DatePicker from "react-datepicker";
import axiosWithAuth from "../../../utils/AxiosWithAuth";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../actions/index.js";
import { Row, Col, Menu, Dropdown } from "antd";

const Todo = (props) => {
  const { id, assigned } = props;
  const [assignedUsers, setAssignedUsers] = useState(assigned || []);
  const [reschedule, setReschedule] = useState({
    popup: false,
    due: new Date(),
  });

  const dispatch = useDispatch();
  const userIsChild = useSelector((state) => state.user.childActive);
  const householdUsers = useSelector((state) => state.household.members);

  const assign = (props) => {
    const user = props.item.props.member;

    const alreadyAssigned = assignedUsers.find((obj) => {
      return obj.username === user.username;
    });

    if (!alreadyAssigned) {
      axiosWithAuth()
        .post(`/todos/assign/${id}`, {
          id: user.id,
          type: user.child ? "child" : "member",
        })
        .then((res) => {
          setAssignedUsers(res.data);
        })
        .catch((err) => console.log(err.message));
    }
  };

  const unassign = (user) => {
    axiosWithAuth()
      .post(`/todos/unassign/${id}`, {
        id: user.id,
        type: user.child ? "child" : "member",
      })
      .then((res) => {
        console.log(res);
        setAssignedUsers(res.data);
      })
      .catch((err) => console.log(err.message));
  };

  const handleDue = (date) => {
    setReschedule({ due: date });
  };

  const handleRemove = () => {
    if (userIsChild) {
      // TODO: replace with permanent functionality
      alert("Children cannot delete todos");
    } else {
      dispatch(actions.todo.removeTodo(id));
    }
  };

  const userSelect = (
    <Menu onClick={assign}>
      {householdUsers.map((member) => {
        return (
          <Menu.Item key={member.username} member={member}>
            {member.username}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  useEffect(() => {
    // dispatch(actions.todo.fetchAssignedUsers(id));
    // dispatch(actions.houseHold.fetchHousehold());
  }, [id]);

  return (
    <SwipeableListItem
      threshold={0.5}
      swipeLeft={{
        content: <SwipeLeft />,
        action: handleRemove,
      }}
      swipeRight={{
        content: <SwipeRight />,
        action: () => alert("Task Completed! (TODO)"),
      }}
    >
      <Row
        align="middle"
        style={{
          width: "100%",
          padding: "10px 30px",
          borderTop: "1px solid whitesmoke",
          borderBottom: "1px solid whitesmoke",
        }}
      >
        <Col span={12}>
          <h3>{props.title}</h3>
          <p>Due {props.due}</p>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          {/* Testing mapping over with selection as an object */}
          {assignedUsers.map((user, index) => {
            return (
              <Label circular key={index} onClick={() => unassign(user)}>
                {user.username}{" "}
                <Icon style={{ paddingLeft: "4px" }} name="remove circle" />
              </Label>
            );
          })}

          {/* Select user dropdown - should only be visible if the current user does not have an active child account */}
          {!userIsChild ? (
            <Dropdown overlay={userSelect} trigger={["click"]}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <Icon name="add user" size="large"></Icon>
              </a>
            </Dropdown>
          ) : (
            ""
          )}

          {/* Reschedule popup - should only be visible if the current user does not have an active child account */}
          {!userIsChild ? (
            <Popup
              on="click"
              onClose={() => setReschedule({ popup: false })}
              onOpen={() => setReschedule({ popup: true })}
              open={reschedule.popup}
              position="right center"
              trigger={<Icon name="clock" size="large" />}
            >
              <div style={{ width: "300px" }}>
                <h3>Reschedule</h3>
                <DatePicker
                  wrapped
                  size="medium"
                  className="date-picker"
                  selected={reschedule.due}
                  onChange={handleDue}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  minDate={new Date()}
                  timeCaption="time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </div>
            </Popup>
          ) : (
            ""
          )}
        </Col>
      </Row>
    </SwipeableListItem>
  );
};

export default Todo;

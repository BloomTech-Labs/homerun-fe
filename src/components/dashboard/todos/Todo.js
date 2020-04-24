/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Icon, Label, Popup } from "semantic-ui-react";
import { SwipeableListItem } from "@sandstreamdev/react-swipeable-list";
import SwipeLeft from "./SwipeLeft";
import SwipeRight from "./SwipeRight.js";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../actions/index.js";
import useAsyncState from "../../../hooks/useAsyncState.js";
import { Row, Col, Menu, Dropdown } from "antd";
import dayjs from "dayjs";
import useWindowSize from "../../../hooks/useWindowSize.js";
import Confetti from "react-confetti";

const Todo = (props) => {
  const { id, assigned, completed } = props;

  const [assignedUsers, setAssignedUsers] = useState(assigned || []);
  const [reschedule, setReschedule] = useAsyncState({
    popup: false,
    due: new Date(),
  });
  const [confetti, setConfetti] = useAsyncState(false);

  const store = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const userIsChild = useSelector((state) => state.user.childActive);
  const householdUsers = useSelector((state) => state.household.members);

  const { height, width } = useWindowSize();

  const assign = (props) => {
    const user = props.item.props.member;

    const alreadyAssigned = assignedUsers.find((obj) => {
      return obj.username === user.username;
    });

    if (!alreadyAssigned) {
      const type = user.child ? "child" : "member";
      dispatch(actions.todo.assignUser(id, user.id, type));
    }
  };

  const unassign = (user) => {
    const type = user.child ? "child" : "member";
    dispatch(actions.todo.unassignUser(id, user.id, type));
  };

  const handleDue = (date) => {
    setReschedule({ due: date }).then(() => {
      if (reschedule.due !== undefined) {
        dispatch(
          actions.todo.updateTodo(id, { due: dayjs(reschedule.due).unix() })
        );
      }
    });
  };

  // TODO: This is not the right index from the store.
  const handleRemove = () => {
    if (userIsChild) {
      // TODO: replace with permanent functionality
      alert("Children cannot delete todos");
    } else {
      dispatch(actions.todo.removeTodo(id));
    }
  };

  const handleCompleted = () => {
    setConfetti(true).then(() => {
      setTimeout(() => {
        setConfetti(false);
      }, 2200);
    });
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
    setAssignedUsers(assigned);
  }, [assigned]);

  return (
    <SwipeableListItem
      threshold={0.5}
      swipeLeft={{
        content: <SwipeLeft />,
        action: handleRemove,
      }}
      swipeRight={{
        content: <SwipeRight />,
        action: handleCompleted,
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
        <Col span={24}>
          <Row>
            <Col span={12}>
              <h3>{props.title}</h3>
              <p>Due {dayjs.unix(props.due).format("MM/DD/YY")}</p>
            </Col>
            <Col span={12} style={{ textAlign: "right" }}>
              {/* Testing mapping over with selection as an object */}
              <Row justify="end">
                <Col>
                  {/* Select user dropdown - should only be visible if the current user does not have an active child account */}
                  {!userIsChild ? (
                    <Dropdown overlay={userSelect} trigger={["click"]}>
                      <a
                        className="ant-dropdown-link"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <i
                          className="ui icon add user blue large"
                          style={{ marginRight: "10px" }}
                        ></i>
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
                      trigger={<i className="ui icon clock blue large"></i>}
                    >
                      <div style={{ width: "300px" }}>
                        <h3>Reschedule</h3>
                        <DatePicker
                          wrapped
                          size="medium"
                          className="date-picker"
                          selected={new Date()}
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
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ marginTop: "10px" }}>
              {assignedUsers.map((user, index) => {
                if (userIsChild) {
                  return (
                    <Label circular basic color="grey" key={index}>
                      {user.username}
                    </Label>
                  );
                } else {
                  return (
                    <Label
                      className="todo-user-pill"
                      circular
                      basic
                      color="grey"
                      key={index}
                      onClick={() => unassign(user)}
                    >
                      {user.username}
                      <Icon style={{ paddingLeft: "4px" }} name="remove" />
                    </Label>
                  );
                }
              })}
            </Col>
          </Row>
        </Col>
      </Row>
      <Confetti
        width={width}
        height={height}
        run={confetti}
        recycle={false}
        numberOfPieces={150}
        tweenDuration={2000}
        onConfettiComplete={() =>
          dispatch(actions.todo.updateTodo(id, { completed: !completed }))
        }
      />
    </SwipeableListItem>
  );
};

export default Todo;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Icon, Label } from "semantic-ui-react";
import { SwipeableListItem } from "@sandstreamdev/react-swipeable-list";
import SwipeLeft from "./SwipeLeft";
import SwipeRight from "./SwipeRight.js";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../actions/index.js";
import useAsyncState from "../../../hooks/useAsyncState.js";
import { Row, Col, Menu, Dropdown } from "antd";
import DatePicker from "../../../utils/DatePicker.js";
import dayjs from "dayjs";
import useWindowSize from "../../../hooks/useWindowSize.js";
import Confetti from "react-confetti";
import TodoEditModal from "./TodoEditModal";

const Todo = (props) => {
  const { id, assigned, completed } = props;

  const [assignedUsers, setAssignedUsers] = useState(assigned || []);
  const [reschedule, setReschedule] = useAsyncState({
    popup: false,
    due: new Date(),
  });
  const [confetti, setConfetti] = useAsyncState(false);
  const dispatch = useDispatch();
  const userIsChild = useSelector((state) => state.user.childActive);
  const householdUsers = useSelector((state) => state.household.members);
  const { height, width } = useWindowSize();
  const [editing, setEditing] = useState(false);

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
    setReschedule({ due: dayjs(date).unix() }).then(() => {
      dispatch(actions.todo.updateTodo(id, { due: dayjs(date).unix() }));
    });
    setReschedule({ popup: !reschedule.popup });
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
              <p
                className={
                  dayjs().isBefore(dayjs.unix(props.due)) ? "" : "overdue"
                }
              >
                Due {dayjs.unix(props.due).format("MM/DD/YY")}
              </p>
            </Col>
            <Col span={12} style={{ textAlign: "right" }}>
              {/* Testing mapping over with selection as an object */}
              <Row justify="end">
                <Col>
                  {!userIsChild ? (
                    <i
                      className="ui icon edit large blue todo-icon"
                      onClick={() => setEditing(true)}
                    ></i>
                  ) : (
                    ""
                  )}
                  {!userIsChild ? (
                    <Dropdown overlay={userSelect} trigger={["click"]}>
                      <a
                        className="ant-dropdown-link"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <i
                          className="ui icon add user blue large todo-icon"
                          style={{ marginRight: "10px" }}
                        ></i>
                      </a>
                    </Dropdown>
                  ) : (
                    ""
                  )}

                  {/* Reschedule popup - should only be visible if the current user does not have an active child account */}
                  {!userIsChild ? (
                    <>
                      <i
                        className="ui icon clock large blue todo-icon"
                        onClick={() =>
                          setReschedule({
                            ...reschedule,
                            popup: !reschedule.popup,
                          })
                        }
                      ></i>
                    </>
                  ) : (
                    ""
                  )}
                  {reschedule.popup ? (
                    <DatePicker onChange={handleDue} open={reschedule.popup} />
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
      <TodoEditModal open={editing} setOpened={setEditing} todo={props} />
    </SwipeableListItem>
  );
};

export default Todo;

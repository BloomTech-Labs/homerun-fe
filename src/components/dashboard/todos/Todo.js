import React, { useState, useEffect } from 'react';
import { Icon, Label } from 'semantic-ui-react';
import { SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import SwipeLeft from './SwipeLeft';
import SwipeRight from './SwipeRight.js';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../actions/index.js';
import useAsyncState from '../../../hooks/useAsyncState.js';
import { Row, Col, Menu, Dropdown } from 'antd';
import DatePicker from '../../../utils/DatePicker.js';
import dayjs from 'dayjs';
import useWindowSize from '../../../hooks/useWindowSize.js';
import Confetti from 'react-confetti';
import TodoEditModal from './TodoEditModal';
import perms from '../../../utils/permissions';

const Todo = (props) => {
  const { id, assigned, completed, created_by } = props;

  const [assignedUsers, setAssignedUsers] = useState(assigned || []);
  const [reschedule, setReschedule] = useAsyncState({
    popup: false,
    due: new Date(),
  });
  const [confetti, setConfetti] = useAsyncState(false);
  const dispatch = useDispatch();
  const householdUsers = useSelector((state) => state.household.members);
  const [user_id, username, permission] = useSelector((state) => [
    state.user.id,
    state.user.username,
    state.user.permission_level,
  ]);
  const { height, width } = useWindowSize();
  const [editing, setEditing] = useState(false);

  const canAssign = () => {
    return permission >= perms.REGULAR;
  };

  const canUnassignMember = (member) => {
    return (
      permission >= perms.ADMIN ||
      (permission == perms.REGULAR && member.id == user_id)
    );
  };

  const canComplete = () => {
    if (permission >= perms.ADMIN) {
      return true;
    } else if (assignedUsers.find((who) => who.id == user_id)) {
      return true;
    }
    return false;
  };

  const canEdit = () => {
    if (permission >= perms.ADMIN) {
      return true;
    }
    // TODO: adjust as necessary to when created_by is supported
    else if (permission === perms.REGULAR && created_by === user_id) {
      return true;
    }
    return false;
  };

  const assign = (event) => {
    const member_id = event.item.props.member_id;
    const alreadyAssigned = assignedUsers.find((obj) => {
      return obj.id === member_id;
    });

    if (!alreadyAssigned) {
      const type = 'member';
      dispatch(actions.todo.assignUser(id, member_id, type));
    }
  };

  const unassign = (user_id) => {
    const type = 'member';
    dispatch(actions.todo.unassignUser(id, user_id, type));
  };

  const handleDue = (date) => {
    setReschedule({ due: dayjs(date).unix() }).then(() => {
      dispatch(actions.todo.updateTodo(id, { due: dayjs(date).unix() }));
    });
    setReschedule({ popup: !reschedule.popup });
  };

  // TODO: This is not the right index from the store.
  const handleRemove = () => {
    dispatch(actions.todo.removeTodo(id));
  };

  const handleCompleted = () => {
    if (!completed) {
      setConfetti(true).then(() => {
        setTimeout(() => {
          setConfetti(false);
        }, 2200);
      });
    } else {
      dispatch(actions.todo.updateTodo(id, { completed: !completed }));
    }
  };

  const userSelect = () => {
    if (permission >= perms.ADMIN) {
      return (
        <Menu onClick={assign}>
          {householdUsers.map((member) => {
            return (
              <Menu.Item key={member.username} member_id={member.id}>
                {member.username}
              </Menu.Item>
            );
          })}
        </Menu>
      );
    } else {
      return (
        <Menu onClick={assign}>
          <Menu.Item member_id={user_id}>{username}</Menu.Item>
        </Menu>
      );
    }
  };

  const AssignedUsersComponent = () => {
    return (
      <>
        {assignedUsers.filter(canUnassignMember).map((user, index) => (
          <Label
            className="todo-user-pill"
            circular
            basic
            color="grey"
            key={index}
            onClick={() => unassign(user.id)}
          >
            {user.username}
            <Icon style={{ paddingLeft: '4px' }} name="remove" />
          </Label>
        ))}
        {/* TODO: make hovering *not* highlight these as red */}
        {assignedUsers
          .filter((user) => !canUnassignMember(user))
          .map((user, index) => (
            <Label circular basic color="grey" key={index}>
              {user.username}
            </Label>
          ))}
      </>
    );
  };

  useEffect(() => {
    setAssignedUsers(assigned);
  }, [assigned]);

  return (
    <SwipeableListItem
      threshold={0.5}
      swipeLeft={
        canEdit()
          ? {
              content: <SwipeLeft />,
              action: handleRemove,
            }
          : undefined
      }
      swipeRight={
        canComplete()
          ? {
              content: <SwipeRight />,
              action: handleCompleted,
            }
          : undefined
      }
    >
      <Row
        align="middle"
        style={{
          width: '100%',
          padding: '10px 30px',
          borderTop: '1px solid whitesmoke',
          borderBottom: '1px solid whitesmoke',
        }}
      >
        <Col span={24}>
          <Row>
            <Col span={12}>
              <h3>{props.title}</h3>
              {props.due && (
                <p
                  className={
                    dayjs().isBefore(dayjs.unix(props.due)) ? '' : 'overdue'
                  }
                >
                  Due {dayjs.unix(props.due).format('MM/DD/YY')}
                </p>
              )}
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              {/* Testing mapping over with selection as an object */}
              <Row justify="end">
                <Col>
                  {canEdit() && (
                    <i
                      className="ui icon edit large blue todo-icon"
                      onClick={() => setEditing(true)}
                      data-testid="iconEdit"
                    ></i>
                  )}
                  {canAssign() && (
                    <Dropdown
                      overlay={userSelect}
                      trigger={['click']}
                      placement="bottomRight"
                    >
                      <button
                        className="ant-dropdown-link"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <i
                          className="ui icon add user blue large todo-icon"
                          style={{ marginRight: '10px' }}
                          data-testid="iconAssign"
                        ></i>
                      </button>
                    </Dropdown>
                  )}
                  {canEdit() && (
                    <i
                      className="ui icon clock large blue todo-icon"
                      onClick={() =>
                        setReschedule({
                          ...reschedule,
                          popup: !reschedule.popup,
                        })
                      }
                      data-testid="iconChangeDate"
                    ></i>
                  )}
                  {reschedule.popup ? (
                    <DatePicker onChange={handleDue} open={reschedule.popup} />
                  ) : (
                    ''
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ marginTop: '10px' }}>
              <AssignedUsersComponent />
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

import React, { useState, useEffect } from 'react';
import { List, Icon, Label, Popup } from 'semantic-ui-react';
import { SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import SwipeLeft from './SwipeLeft';
import SwipeRight from './SwipeRight.js';
import DatePicker from "react-datepicker";
import axiosWithAuth from '../../../utils/AxiosWithAuth';
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../../actions/index.js';

import { Row, Col, Menu, Dropdown } from 'antd';

const Todo = props => {

    const { id } = props

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user);


    const [assigned, setAssigned] = useState([])
    const [assignees, setAssignees] = useState([])
    const [reschedule, setReschedule] = useState({
        popup: false,
        due: new Date()
    })

    const addSelection = (props) => {
        const toAssign = {
            id: props.item.props.member.id,
            type: props.item.props.member.child ? "child" : "member",
            username: props.item.props.member.username
        };

        const alreadyAssigned = assigned.find((obj) => {
            return obj.id === toAssign.id;
        });

        if (!alreadyAssigned) {
            setAssigned([...assigned, toAssign])
        }

        let request = {
            assignees: assigned
        }

        // TODO Assignees is not updated at this point. This needs more work.
        console.log(assigned)
        axiosWithAuth().post(`/todos/assign/${id}`, JSON.stringify(request))
            .then(res => console.log(res))
            .catch(err => console.log(err.message))


    }

    const removeSelection = (selection) => {
        setAssigned(assigned.filter(obj => obj.username !== selection.username))
        let request = {
            assignees: assigned
        }
        console.log(request)
        axiosWithAuth().post(`/todos/unassign/${id}`, JSON.stringify(request))
            .then(res => console.log(res))
            .catch(err => console.log(err.message))
    }

    const handleDue = (date) => {
        setReschedule({ due: date })
    }

    const handleRemove = () => {
        if(currentUser.childActive === true) {
            // alert for now but ideally would be updated to display this information to a user in a better way
            alert('Children cannot delete todos');
        } else {
            dispatch(actions.todo.removeTodo(id))
        }
    }

    const userSelect = (
        <Menu onClick={addSelection}>
            {assignees.map((member) => {
                return <Menu.Item key={member.username} member={member}>{member.username}</Menu.Item>
            })}
        </Menu>
    )

    // this can go - no need for it - we can get the current household members by accessing the members state in redux householdReducer
    useEffect(() => {
        axiosWithAuth().get(`/members/household/assignable`)
            .then(res => setAssignees(res.data))
            .catch(err => console.log(err.message))
    }, [assigned])


    return (
        <SwipeableListItem
            threshold={0.50}
            swipeLeft={{
                content: <SwipeLeft />,
                action: handleRemove
            }}
            swipeRight={{
                content: <SwipeRight />,
                action: () => alert('Task Completed! (TODO)')
            }}
        >
            <Row align="middle" style={{ width: "100%", padding: '10px 30px', borderTop: "1px solid whitesmoke", borderBottom: "1px solid whitesmoke" }}>
                <Col span={12}>
                    <h3>{props.title}</h3>
                    <p>Due {props.due}</p>
                </Col>
                <Col span={12} style={{ textAlign: 'right' }}>

                    {/* Testing mapping over with selection as an object */}
                    {assigned.map((selection, index) => {
                        return <Label circular key={index} onClick={() => removeSelection(selection)}>{selection.username} <Icon style={{ paddingLeft: "4px" }} name='remove circle' /></Label>
                    })}

                    {/* Select user dropdown - should only be visible if the current user does not have an active child account */}
                  { !currentUser.childActive ? (<Dropdown overlay={userSelect} trigger={['click']}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            <Icon name="add user" size='large'></Icon>
                        </a>
                    </Dropdown>)
                    : ''
                    }

                    {/* Reschedule popup - should only be visible if the current user does not have an active child account */}
                    { !currentUser.childActive ? (<Popup
                        on='click'
                        onClose={() => setReschedule({ popup: false })}
                        onOpen={() => setReschedule({ popup: true })}
                        open={reschedule.popup}
                        position="right center"
                        trigger={<Icon name="clock" size='large' />}
                    >
                        <div style={{ width: "300px" }}>
                            <h3>Reschedule</h3>
                            <DatePicker
                                wrapped size="medium"
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
                        </Popup>)
                      : ''
                    }


                </Col>

            </Row>
        </SwipeableListItem>
    )
}

export default Todo;
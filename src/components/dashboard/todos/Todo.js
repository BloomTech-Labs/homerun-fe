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

    const dispatch = useDispatch()


    const [assigned, setAssigned] = useState([])
    const [assignees, setAssignees] = useState([])
    const [reschedule, setReschedule] = useState({
        popup: false,
        due: new Date()
    })

    const addSelection = ({ key }) => {
        if (!assigned.includes(key)) {
            setAssigned([...assigned, key])
        } else {
            return null
        }
    }

    const removeSelection = (selection) => {
        if (assigned.includes(selection)) {
            setAssigned(assigned.filter(element => element !== selection))
        } else {
            throw new Error()
        }
    }

    const handleDue = (date) => {
        setReschedule({ due: date })
    }

    const handleRemove = () => {
        dispatch(actions.todo.removeTodo(id))
    }

<<<<<<< HEAD
    // TODO: no need to axios call here since all current members should be saved in the household reducer you can simply grab that state
=======
    const userSelect = (
        <Menu onClick={addSelection}>
            {assignees.map((member) => {
                return <Menu.Item key={member.username}>{member.username}</Menu.Item>
            })}
        </Menu>
    )

>>>>>>> c4563c6a83b737bf2a9522fed66c9e55ff345ef4
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
                    {assigned.map((selection, index) => {
                        return <Label circular key={index} onClick={() => removeSelection(selection)}>{selection} <Icon style={{ paddingLeft: "4px" }} name='remove circle' /></Label>
                    })}

                    {/* Select user dropdown */}
                    <Dropdown overlay={userSelect} trigger={['click']}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            <Icon name="add user" size='large'></Icon>
                        </a>
                    </Dropdown>

                    {/* Reschedule popup */}
                    <Popup
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
                    </Popup>


                </Col>

            </Row>
        </SwipeableListItem>
    )
}

export default Todo;
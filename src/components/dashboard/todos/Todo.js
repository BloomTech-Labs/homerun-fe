import React, { useState, useEffect } from 'react';
import { List, Icon, Label, Popup } from 'semantic-ui-react';
import { SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import SwipeLeft from './SwipeLeft';
import SwipeRight from './SwipeRight.js';
import DatePicker from "react-datepicker";
import axiosWithAuth from '../../../utils/AxiosWithAuth';
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../../actions/index.js';

import { Row, Col } from 'antd'



const Todo = props => {

    console.log("Props from todo.js", props)
    const { id } = props

    const store = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const [modalOpen, setModalOpen] = useState(false);
    const [assigned, setAssigned] = useState([])
    const [assignees, setAssignees] = useState([])
    const [reschedule, setReschedule] = useState({
        popup: false,
        due: new Date()
    })

    const addSelection = e => {
        let selection = e.target.value
        if (!assigned.includes(selection)) {
            setAssigned([...assigned, selection])
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

    // TODO: no need to axios call here since all current members should be saved in the household reducer you can simply grab that state
    useEffect(() => {
        axiosWithAuth().get(`/members/household/assignable`)
            .then(res => setAssignees(res.data))
            .catch(err => console.log(err.message))
    }, [assigned])

    useEffect(() => {

    }, [dispatch])

    return (
        <SwipeableListItem
            threshold={0.50}
            swipeLeft={{
                content: <SwipeLeft />,
                action: handleRemove
            }}
            swipeRight={{
                content: <SwipeRight />,
                action: () => console.log('Working')
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
                    <div className="ui buttons">
                        <select className="ui floating dropdown button" onChange={addSelection}>
                            {assignees.map((member, index) => {
                                return <option key={index} value={member.username}>{member.username}</option>
                            })}
                        </select>
                    </div>
                    <Popup
                        on='click'
                        onClose={() => setReschedule({ popup: false })}
                        onOpen={() => setReschedule({ popup: true })}
                        open={reschedule.popup}
                        position="right center"
                        trigger={<i className="ui icon small clock"></i>}
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
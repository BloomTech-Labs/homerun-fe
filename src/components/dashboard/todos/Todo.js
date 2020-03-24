import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { List, Icon, Label, Popup } from 'semantic-ui-react';
import { SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import SwipeLeft from './SwipeLeft';
import SwipeRight from './SwipeRight.js';
import DatePicker from "react-datepicker";
import { DeleteTodoModal } from './DeleteTodoModal.js';
import axiosWithAuth from '../../../utils/AxiosWithAuth';



const Todo = props => {

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

    useEffect(() => {
        axiosWithAuth().get(`/members/household/assignable`)
            .then(res => setAssignees(res.data))
            .catch(err => console.log(err.message))
    }, [assigned])

    return (
        <>
            <DeleteTodoModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
            <List.Item className='todo'>
                <SwipeableListItem
                    threshold={0.50}
                    swipeLeft={{
                        content: <SwipeLeft />,
                        action: () => setModalOpen(true)
                    }}
                    swipeRight={{
                        content: <SwipeRight />,
                        action: () => console.log('Working')
                    }}
                >
                    <List.Content className='todo-container'>

                        <div className='todo-left'>
                            <List.Header as='a'>{props.task.title} </List.Header>
                            <List.Header as={'h5'}>Due {props.task.due}</List.Header>
                        </div>
                        <div className='todo-right'>
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
                        </div>
                    </List.Content>
                </SwipeableListItem>
            </List.Item>
        </>
    )
}

export default Todo;
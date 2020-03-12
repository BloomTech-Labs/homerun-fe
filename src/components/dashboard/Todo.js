import React, { useState, useEffect } from 'react';

import { List, Icon, Input, Modal, Button, Dropdown, Label } from 'semantic-ui-react';

import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import { SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import SwipeLeft from './SwipeLeft';
import SwipeRight from './SwipeRight.js';

import Assign from './AssignUserButton.js';
import { DeleteTodoModal } from './DeleteTodoModal.js';



const Todo = props => {
    const [modalOpen, setModalOpen] = useState(false);
    let assigned = []

    const handleAssignee = e => {
        let item = e.target.value
        if (assigned.includes(item)) {
            let idx = assigned.indexOf(item)
            assigned.splice(idx, 1)
        } else {
            assigned.push(item)
        }
    }


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
                            <div className="ui buttons">
                                <select className="ui floating dropdown button" onChange={handleAssignee}>
                                    <option value="a">A</option>
                                    <option value="b">B</option>
                                    <option value="c">C</option>
                                    <option value="d">D</option>
                                </select>
                            </div>
                            {console.log(assigned)}
                        </div>
                    </List.Content>
                </SwipeableListItem>
            </List.Item>
        </>
    )
}

export default Todo;
import React, { useState } from 'react';

import { List, Icon, Input, Modal, Button} from 'semantic-ui-react';

import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import { SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import SwipeLeft from './SwipeLeft';
import SwipeRight from './SwipeRight.js';

import Assign from './AssignUserButton.js';
import { DeleteTodoModal } from './DeleteTodoModal.js';



const Todo = props => {
    const [modalOpen, setModalOpen] = useState(false);

    console.log(props);
    return (
        <>
        <DeleteTodoModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        <List.Item className='todo'>
            <SwipeableListItem
            threshold = {0.50}
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
                            <Assign />
                        </div>
                    </List.Content>
            </SwipeableListItem>
        </List.Item>
        </>
    )
}

export default Todo;
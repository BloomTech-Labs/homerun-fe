import React, { useState } from 'react';

import { List, Icon, Input, Modal, Button} from 'semantic-ui-react';

import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import { SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import SwipeLeft from './SwipeLeft';
import SwipeRight from './SwipeRight.js';

import Assign from './AssignUserButton.js';


const Todo = props => {
    const [modalOpen, setModalOpen] = useState(false);

    console.log(props);
    return (
        <>
        <Modal open={modalOpen}>
        <Modal.Header> Delete the Todo? </Modal.Header>
            <Modal.Content>
                <p>Are you sure you want to delete this todo?</p>
            </Modal.Content>
            <Modal.Actions>
            <Button onClick={() => setModalOpen(false)} negative>
              No
            </Button>
            <Button
              onClick={() => setModalOpen(false)}
              positive
              labelPosition='right'
              icon='checkmark'
              content='Yes'
            />
          </Modal.Actions>
        </Modal>
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
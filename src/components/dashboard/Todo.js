import React from 'react';

import { List, Icon, Input} from 'semantic-ui-react';

import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import { SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import SwipeLeft from './SwipeLeft';
import SwipeRight from './SwipeRight.js';



const Todo = props => {
    console.log(props);
    return (
        <List.Item className='todo'>
            <SwipeableListItem
                swipeLeft={{
                    content: <SwipeLeft />,
                    action: () => console.log('Working')
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
                    </List.Content>
            </SwipeableListItem>
        </List.Item>
    )
}

export default Todo;
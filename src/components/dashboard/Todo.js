import React from 'react';

import { List, Icon, Input} from 'semantic-ui-react';

import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import { SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import SwipeLeft from './SwipeLeft';
import SwipeRight from './SwipeRight.js';

const Todo = props => {

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
                        <List.Header as='a'>{props.task} </List.Header>
                    </List.Content>
            </SwipeableListItem>
        </List.Item>
    )
}

export default Todo;
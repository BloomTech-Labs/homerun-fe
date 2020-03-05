import React from 'react';

import { List, Icon } from 'semantic-ui-react';

import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import '../../SASS/TodoList.scss';
import { SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import SwipeLeft from './SwipeLeft';

const Todo = props => {

    return (
        <List.Item>
        <SwipeableListItem
            swipeLeft={{
                content: <SwipeLeft />,
                action: () => console.log('Working')
            }}
            swipeRight={{
                content: <div>SwipeRight</div>,
                action: () => console.log('Working')
            }}
        >
           
                <List.Content>
                <List.Header as='a'>{props.task} </List.Header>
                </List.Content>
         
        </SwipeableListItem>
        </List.Item>
    )
}

export default Todo;
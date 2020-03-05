import React from 'react';
import { List } from 'semantic-ui-react';

import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';

import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import '../../SASS/TodoList.scss';

import SwipeLeft from './SwipeLeft.js';

import Todo from './Todo.js';


const TodoList= () => {

  return (
    <List size='massive' celled verticalAlign='middle'>
        <Todo task='Task 1' />
        <Todo task={'Task 2'} />
        <Todo task={'Task 3'} />
    </List>
    )

  }


export default TodoList;

import React from 'react';

import { List, Icon } from 'semantic-ui-react';

const Todo = props => {

    return (
        <List.Item>
            <List.Content>
            <List.Header as='a'>{props.task} </List.Header>
            </List.Content>
      </List.Item>
    )
}

export default Todo;
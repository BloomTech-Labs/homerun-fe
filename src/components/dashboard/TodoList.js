import React from 'react'
import { List, Icon } from 'semantic-ui-react'

const TodoList = () => (
  <List divided verticalAlign="middle">
    <List.Item>
      <Icon name="check" />
      <List.Content>
        <List.Header as="a">Task 1 </List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Icon name="check" />
      <List.Content>
        <List.Header as="a">Task 2</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Icon name="check" />
      <List.Content>
        <List.Header as="a">Task 3</List.Header>
      </List.Content>
    </List.Item>
  </List>
);

export default TodoList;
import React from 'react';
import { Icon, List } from 'semantic-ui-react';


const TodoList = () => (
  <List divided verticalAlign="middle">
    <List.Item>
      <Icon aria-hidden="true" className="checkmark" />
      <List.Content>
        <List.Header as="a">Task 1 </List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Icon aria-hidden="true" className="checkmark" />
      <List.Content>
        <List.Header as="a">Task 2</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Icon aria-hidden="true" className="checkmark" />
      <List.Content>
        <List.Header as="a">Task 3</List.Header>
      </List.Content>
    </List.Item>
  </List>
);

export default TodoList;
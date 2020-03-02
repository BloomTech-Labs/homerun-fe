import React from 'react'
import { Image, List } from 'semantic-ui-react'

const TodoList= () => (
  <List divided verticalAlign='middle'>
    <List.Item>
      <Image avatar src='' />
      <List.Content>
        <List.Header as='a'>Task 1 </List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='' />
      <List.Content>
        <List.Header as='a'>Task 2</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='' />
      <List.Content>
        <List.Header as='a'>Task 3</List.Header>
      </List.Content>
    </List.Item>
  </List>
)


export default TodoList;





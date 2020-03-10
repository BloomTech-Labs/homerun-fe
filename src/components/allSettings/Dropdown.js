import React from 'react'
import { Button, Dropdown as SemanticDropDown } from 'semantic-ui-react'

const options = [
  { key: 'edit', icon: 'edit', text: 'Edit Post', value: 'edit' },
  { key: 'delete', icon: 'delete', text: 'Remove Post', value: 'delete' },
  { key: 'hide', icon: 'hide', text: 'Hide Post', value: 'hide' },
]

const Dropdown = () => {
 
 
  return (
  <Button.Group color='teal'>
    <Button>Members</Button>
    <SemanticDropDown
      className='button icon'
      floating
      options={options}
      trigger={<React.Fragment />}
    />
  </Button.Group>
  )
}
export default Dropdown;

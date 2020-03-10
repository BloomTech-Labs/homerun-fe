import React from 'react'
import { Button, Dropdown as SemanticDropDown } from 'semantic-ui-react'

const options = [
  { icon: 'user', text: 'Mom', value: 'Mom' },
  { icon: 'user', text: 'Dad', value: 'Dad' },
  { icon: 'user', text: 'Daughter', value: 'Daughter' },
  {icon: 'user', text: 'Son', value: 'Son' },
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

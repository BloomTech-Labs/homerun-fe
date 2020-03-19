import React from 'react';

// import { Button, Header, Modal, Icon } from 'semantic-ui-react';

import { button, Header, Input, Modal } from 'semantic-ui-react'

// const ModalModalExample = () => (
//   <Modal trigger={<Button classname='header-btns'>}>
//     <Modal.Header>Enter Pin</Modal.Header>
//     <Modal.Content image>
//       <Input placeholder= 'Pin' 
//       type='password'/>
//       <Button>Submit</Button> 
//     </Modal.Content>
//   </Modal>
// )

// export default ModalModalExample



const PinNumber = () => (
  <Modal trigger={<button>Show Modal</button>}>
    <Modal.Header>Enter Pin</Modal.Header>
    <Modal.Content image>
      <Input placeholder= 'Pin' 
      type='password'/>
      <button>Submit</button> 
    </Modal.Content>
  </Modal>
)

export default PinNumber;










// const ModalButton = () => {
//   return (
//     <button className='header-btns'>
//       <Icon name='lock' size='big' />
//     </button>
//   )
// }

// const PinNumber = () => (
//     <Modal trigger={ModalButton()}>
//         <Modal.Header> Enter PIN </Modal.Header>
//                 <label>Pin</label>
//                 <input placeholder='Pin'
//                 type= "password" />
//               <Button type='submit'>Submit</Button>
//         </Modal>

// )

// export default PinNumber;
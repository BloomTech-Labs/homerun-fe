import React from 'react';

import { Button, Header, Modal, Icon } from 'semantic-ui-react';

const ModalButton = () => {
  return (
    <button className='header-btns'>
      <Icon name='lock' size='big' />
    </button>
  )
}

const PinNumber = () => (
    <Modal trigger={ModalButton()}>
        <Modal.Header> Enter PIN </Modal.Header>
                <label>Pin</label>
                <input placeholder='Pin'
                type= "password" />
              <Button type='submit'>Submit</Button>
        </Modal>

)

export default PinNumber;
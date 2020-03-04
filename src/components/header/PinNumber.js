import React from 'react';

import { Button, Header, Modal } from 'semantic-ui-react';

const PinNumber = () => (
    <Modal trigger={<Button className='circle-button' size='large' circular icon='lock'/>}>
        <Modal.Header> Enter PIN </Modal.Header>
                <label>Pin</label>
                <input placeholder='Pin' />
              <Button type='submit'>Submit</Button>
        </Modal>

)

export default PinNumber;
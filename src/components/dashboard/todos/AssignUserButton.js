import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { AssignUserModal } from './AssignUserModal.js';

const AssignUserButton = () => {

    return (
        <Modal trigger={<Button size='big' icon='add user' />}>
            <AssignUserModal />
        </Modal>
    )
}


export default AssignUserButton;
import React from 'react';
import { Icon, Button, Dropdown, Modal } from 'semantic-ui-react';
import { AssignUserModal } from './AssignUserModal.js';

const AssignUserButton = () => {

    return (
        <Modal trigger={<Button icon='add user' />}>
            <AssignUserModal />
        </Modal>
    )
}


export default AssignUserButton;
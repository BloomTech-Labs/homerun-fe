import React from 'react';

import { Modal, Dropdown } from 'semantic-ui-react';

export const AssignUserModal = () => {

    // hard coding options for now but once we can get the endpoint for getting household members the options part will need to be updated
    const options = [
        { key: '1', text: 'Mom', value: 'Mom' },
        { key: '2', text: 'Dad', value: 'Dad' },
        { key: '3', text: 'Daughter', value: 'Daughter' },
        { key: '4', text: 'Son', value: 'Son' },
    ]

    return (
        <>
        <Modal.Header> Assign a Member to a task</Modal.Header>
          <Modal.Content>
            <p>Some Stuff Here</p>
            <Dropdown openOnFocus fluid multiple selection options={options} />
          </Modal.Content>
        </>

    )
}
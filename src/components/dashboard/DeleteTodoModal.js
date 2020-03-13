import React, { useState } from 'react';
import { Modal, Button } from 'semantic-ui-react';

export const DeleteTodoModal = (props) => {

    return (
        <Modal open={props.modalOpen}>
        <Modal.Header> Delete the Todo? </Modal.Header>
            <Modal.Content>
                <p>Are you sure you want to delete this todo?</p>
            </Modal.Content>
            <Modal.Actions>
            <Button onClick={() => props.setModalOpen(false)} negative>
              No
            </Button>
            <Button
              onClick={() => props.setModalOpen(false)}
              positive
              labelPosition='right'
              icon='checkmark'
              content='Yes'
            />
          </Modal.Actions>
        </Modal>
    )
}
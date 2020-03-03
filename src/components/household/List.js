import React, { useState } from "react";
import Name from "./Name";
import { Button, Modal } from 'semantic-ui-react';
import HouseholdForm from './HouseholdForm';

const List = () => {
 const [modalOpen, setModalOpen] = useState(false);

        return (
            <div>
                <Name />
                <Modal
                    open={modalOpen}
                    trigger={<Button onClick={() => setModalOpen(true)}>Add Member</Button>}
                    header='Add a member'
                    content={<HouseholdForm setModalOpen={setModalOpen} />}
                    >

                    </Modal>
            </div>
        )
    }


export default List;
import React, { useState, useEffect } from "react";
import Name from "./Name";

// Since this component itself is named List i had to import Semantic Ui's List component as UiList
import { Button, Modal, Image, List as UiList } from 'semantic-ui-react';
import HouseholdForm from './HouseholdForm';

const List = () => {
 const [modalOpen, setModalOpen] = useState(false);

        return (
            <div>
                <UiList selection verticalAlign='middle'>
                    <Name name='Lilly' />
                    <Name name='Billy' />
                    <Name name='Silly' />
                </UiList>
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
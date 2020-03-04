import React, { useState, useEffect } from "react";
import Name from "./Name";

import axios from 'axios';

// Since this component itself is named List i had to import Semantic Ui's List component as UiList
import { Button, Modal, Image, List as UiList } from 'semantic-ui-react';
import HouseholdForm from './HouseholdForm';

const List = () => {
 const [modalOpen, setModalOpen] = useState(false);
 const [members, setMembers] = useState([]);

 useEffect(() => {
    axios.get('https://my.api.mockaroo.com/householdMembers?key=0523bb20')
        .then(res => {
            setMembers(res.data);
        })
        .catch(err => {
            console.log(err);
        })
 }, [])

        return (
            <div>
                <UiList selection verticalAlign='middle'>
                    {members.map(member => {
                        return <Name name={member.username} />
                    })}
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
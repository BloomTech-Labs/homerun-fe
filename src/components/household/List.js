import React, { useState, useEffect } from "react";
import Name from "./Name";

import axiosWithAuth from '../../utils/AxiosWithAuth.js';

// Since this component itself is named List i had to import Semantic Ui's List component as UiList
import { Button, Modal, Image, List as UiList, Loader } from 'semantic-ui-react';
import AddChild from './AddChild.js';
import InviteMember from './InviteMember.js';

const List = () => {
 const [childModal, setChildModal] = useState(false);
 const [memberModal, setMemberModal] = useState(false);
 const [members, setMembers] = useState([]); 


 useEffect(() => {
    axiosWithAuth().get('/members/household/assignable')
        .then(res => {
        console.log("List -> res", res)
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
                        return <Name key={member.id} name={member.username} />
                    })}
                </UiList>
                <Modal open={memberModal} trigger={<Button onClick={() => setMemberModal(true)}>Invite Member</Button>} header='Invite a user to your household' content={<InviteMember setMemberModal={setMemberModal} />}></Modal>
                <Modal open={childModal} trigger={<Button onClick={() => setChildModal(true)}>Add Child</Button>} header='Add a member' content={<AddChild setChildModal={setChildModal} />}></Modal>
            </div>
        )
    }


export default List;
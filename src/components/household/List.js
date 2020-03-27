import React, { useState, useEffect } from "react";
import Name from "./Name";
import axiosWithAuth from "../../utils/AxiosWithAuth.js";

import { useSelector, useDispatch } from 'react-redux';
import { household } from '../../actions/index'

// Since this component itself is named List i had to import Semantic Ui's List component as UiList
import {
  Button,
  Modal,
  Image,
  List as UiList,
  Loader,
  Confirm
} from "semantic-ui-react";
import AddChild from "./AddChild.js";
import InviteMember from "./InviteMember.js";

const List = () => {
  const [childModal, setChildModal] = useState(false);
  const [memberModal, setMemberModal] = useState(false);
  const [members, setMembers] = useState([]);

  const household = useSelector(state => state.household)
  console.log(household);

  useEffect(() => {
    axiosWithAuth()
      .get("/members/household/assignable")
      .then(res => {
        console.log("List -> res", res);
        setMembers(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <UiList selection verticalAlign="middle">
        {members.map(member => {
          return <Name key={member.username} name={member.username} />;
        })}
      </UiList>
      <Modal
        open={memberModal}
        onClose={() => setMemberModal(false)}
        trigger={
          <Button onClick={() => setMemberModal(true)}>Invite Member</Button>
        }
        header="Invite a user to your household"
        content={<InviteMember setModal={setMemberModal} />}
      ></Modal>
      <Modal
        open={childModal}
        onClose={() => setChildModal(false)}
        trigger={<Button onClick={() => setChildModal(true)}>Add Child</Button>}
        header="Add your child"
        content={<AddChild setModal={setChildModal} />}
      ></Modal>
    </div>
  );
};

export default List;

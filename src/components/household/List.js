import React, { useState, useEffect } from "react";
import Name from "./Name";

import { useSelector, useDispatch } from "react-redux";
import actions from "../../actions/index";

// Since this component itself is named List i had to import Semantic Ui's List component as UiList
import { Button, Modal, List as UiList } from "semantic-ui-react";
import AddChild from "./AddChild.js";
import InviteMember from "./InviteMember.js";

const List = () => {
  const [childModal, setChildModal] = useState(false);
  const [memberModal, setMemberModal] = useState(false);

  const household = useSelector((state) => state.household);
  const dispatch = useDispatch();
  console.log(household);

  useEffect(() => {
    dispatch(actions.houseHold.fetchHousehold());
  }, []);

  return (
    <div>
      <UiList selection verticalAlign="middle">
        {household.members.map((member) => {
          return <Name key={member.username} name={member.username} />;
        })}
      </UiList>
      <Modal
        open={memberModal}
        onClose={() => setMemberModal(false)}
        trigger={
          <Button primary onClick={() => setMemberModal(true)}>
            Invite Member
          </Button>
        }
        content={<InviteMember setModal={setMemberModal} />}
      ></Modal>
      <Modal
        open={childModal}
        onClose={() => setChildModal(false)}
        trigger={
          <Button
            className={"addChild-btn"}
            onClick={() => setChildModal(true)}
          >
            Add Child
          </Button>
        }
        content={<AddChild setModal={setChildModal} />}
      ></Modal>
    </div>
  );
};

export default List;

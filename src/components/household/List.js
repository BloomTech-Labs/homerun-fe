import React, { useState, useEffect } from 'react';
import Name from './Name';

import { useSelector, useDispatch } from 'react-redux';
import actions from '../../actions/index';

// Since this component itself is named List i had to import Semantic Ui's List component as UiList
import { Button, Modal, List as UiList } from 'semantic-ui-react';
import InviteMember from './InviteMember.js';
import EditPermissions from './EditPermissions.js';

const List = () => {
  const [memberModal, setMemberModal] = useState(false);
  const [permissionsModal, setPermissionsModal] = useState(false);

  const household = useSelector((state) => state.household);
  const dispatch = useDispatch();
  console.log(household);

  useEffect(() => {
    dispatch(actions.houseHold.fetchHousehold());
  }, [dispatch]);

  return (
    <div data-testid="list">
      <UiList selection verticalAlign="middle">
        {household.members.map((member) => {
          return <Name key={member.username} name={member.username} />;
        })}
      </UiList>
      <Modal
        open={memberModal}
        onClose={() => setMemberModal(false)}
        trigger={
          <Button onClick={() => setMemberModal(true)}>Invite Member</Button>
        }
        content={<InviteMember setModal={setMemberModal} />}
      ></Modal>
      <Modal
        open={permissionsModal}
        onClose={() => setPermissionsModal(false)}
        trigger={
          <Button onClick={() => setPermissionsModal(true)} className="edit-permissions">Edit Permissions</Button>
        }
        content={<EditPermissions setModal={setPermissionsModal} />}
      ></Modal>
    </div>
  );
};

export default List;

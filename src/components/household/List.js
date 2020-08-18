import React, { useState, useEffect } from 'react';
import Name from './Name';

import { useSelector, useDispatch } from 'react-redux';
import actions from '../../actions/index';

// Since this component itself is named List i had to import Semantic Ui's List component as UiList
import { Button, Form, Modal, List as UiList } from 'semantic-ui-react';
import InviteMember from './InviteMember.js';
import EditPermissions from './EditPermissions.js';

const List = () => {
  const [memberModal, setMemberModal] = useState(false);
  const [permissionsModal, setPermissionsModal] = useState(false);
  const [editing, setEditing] = useState(false);

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
          return (
            <div className="flex justify-between">
              <Name key={member.username} name={member.username} />
              <div className="flex">
                <label className="edit-level-label">Level</label>
                <span className="original-level">
                  {member.permission_level}
                </span>
                <Modal
                  open={permissionsModal}
                  onClose={() => setPermissionsModal(false)}
                  trigger={
                    <i
                      className="ui icon edit large blue todo-icon edit-permissions"
                      onClick={() => setPermissionsModal(true)}
                    ></i>
                  }
                  content={<EditPermissions setModal={setPermissionsModal} />}
                ></Modal>{' '}
              </div>
            </div>
          );
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
    </div>
  );
};

export default List;

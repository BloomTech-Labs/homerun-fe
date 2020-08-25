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
  const [memberToEdit, setMemberToEdit] = useState('');
  const [household, user] = useSelector((state) => [
    state.household,
    state.user,
  ]);
  const dispatch = useDispatch();

  const handleEdit = (e, member) => {
    setPermissionsModal(true);
    e.preventDefault();
    setMemberToEdit(member);
  };

  const canInvite = () => user.permission_level >= 3;

  const canEditPermissionLevel = (member) => {
    const user_perm = user.permission_level;
    return user_perm >= 3 && user_perm > member.permission_level;
  };

  const ordering = (a, b) => {
    return b.permission_level - a.permission_level;
  };

  useEffect(() => {
    dispatch(actions.houseHold.fetchHousehold());
  }, [dispatch]);

  return (
    <div data-testid="list">
      <UiList selection verticalAlign="middle">
        {household.members.sort(ordering).map((member) => {
          return (
            <div key={member.username} className="flex justify-between">
              <Name name={member.username} />
              <div key={member.username} className="flex edit-level-container">
                {canEditPermissionLevel(member) && (
                  <Modal
                    open={permissionsModal}
                    onClose={() => setPermissionsModal(false)}
                    trigger={
                      <i
                        className="ui icon edit large blue todo-icon edit-permissions"
                        onClick={(e) => handleEdit(e, member)}
                      ></i>
                    }
                    content={
                      <EditPermissions
                        setModal={setPermissionsModal}
                        key={member.username}
                        member={member}
                        memberToEdit={memberToEdit}
                      />
                    }
                  ></Modal>
                )}
                <label className="edit-level-label">
                  Level {member.permission_level}
                </label>
              </div>
            </div>
          );
        })}
      </UiList>
      {canInvite() && (
        <Modal
          open={memberModal}
          onClose={() => setMemberModal(false)}
          trigger={
            <Button
              onClick={() => setMemberModal(true)}
              className="w-full invite-button"
            >
              Invite Member
            </Button>
          }
          content={<InviteMember setModal={setMemberModal} />}
        ></Modal>
      )}
    </div>
  );
};

export default List;

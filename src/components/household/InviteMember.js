import React from 'react';
import { Button, Form, Loader, Dimmer } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actions';

const InviteMember = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const stateError = useSelector((state) => state.household.error);
  const loadingState = useSelector((state) => state.household.loading);

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    dispatch(actions.houseHold.inviteMember(data, props.setModal));
  };
  return loadingState ? (
    <Dimmer active inverted>
      <Loader size="large">Loading</Loader>
    </Dimmer>
  ) : (
    <>
      <section className="perm-info">
        <h2 className="perm-title">Invite a new member</h2>
        <div className="perm-title-row">
          <p className="perm-table-title">Permission Level</p>
          <p className="perm-title-cell">Level 1</p>
          <p className="perm-title-cell">Level 2</p>
          <p className="perm-title-cell">Level 3</p>
        </div>
        <div className="perm-feature-row">
          <p className="perm-table-title">Complete todos</p>
          <p className="perm-feature-cell">yes</p>
          <p className="perm-feature-cell">yes</p>
          <p className="perm-feature-cell">yes</p>
        </div>
        <div className="perm-feature-row">
          <p className="perm-table-title">Create todos</p>
          <p className="perm-feature-cell">no</p>
          <p className="perm-feature-cell">yes</p>
          <p className="perm-feature-cell">yes</p>
        </div>
        <div className="perm-feature-row">
          <p className="perm-table-title">Edit todos</p>
          <p className="perm-feature-cell">no</p>
          <p className="perm-feature-cell">with restrictions</p>
          <p className="perm-feature-cell">yes</p>
        </div>
        <div className="perm-feature-row">
          <p className="perm-table-title">Delete todos</p>
          <p className="perm-feature-cell">no</p>
          <p className="perm-feature-cell">with restrictions</p>
          <p className="perm-feature-cell">yes</p>
        </div>
        <div className="perm-feature-row">
          <p className="perm-table-title">Assign self</p>
          <p className="perm-feature-cell">no</p>
          <p className="perm-feature-cell">with restrictions</p>
          <p className="perm-feature-cell">yes</p>
        </div>
        <div className="perm-feature-row">
          <p className="perm-table-title">Assign others</p>
          <p className="perm-feature-cell">no</p>
          <p className="perm-feature-cell">no</p>
          <p className="perm-feature-cell">yes</p>
        </div>
        <div className="perm-feature-row">
          <p className="perm-table-title">Invite members</p>
          <p className="perm-feature-cell">no</p>
          <p className="perm-feature-cell">no</p>
          <p className="perm-feature-cell">level 1-2</p>
        </div>
      </section>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label>
            Please enter the email address of the user you wish to invite.
          </label>
          <input
            type="email"
            name="email"
            placeholder="user@email.com"
            ref={register}
          />
          {stateError && <p className={'error'}>{stateError}</p>}
        </Form.Field>
        <Form.Field>
          <label>
            Please choose the permission level of the user you wish to invite.
          </label>
          <input
            type="number"
            name="permission_level"
            placeholder="1-3"
            min="1"
            max="3"
            ref={register}
          />
          {stateError && <p className={'error'}>{stateError}</p>}
        </Form.Field>
        <Button type="submit" className="invite-button">
          Invite Member
        </Button>
      </Form>
    </>
  );
};

export default InviteMember;

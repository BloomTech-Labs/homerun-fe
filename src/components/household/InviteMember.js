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
          <p>Level 1 : May complete todos they are assigned to.</p>
          <p>
            Level 2 : May create todos and assign themselves + edit todos they
            have created.
          </p>
          <p>
            Level 3 : No restrictions on todos and may invite level 1 and 2 to
            the group.
          </p>
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
            name="level"
            placeholder="1-3"
            min="1"
            max="3"
            ref={register}
          />
          {stateError && <p className={'error'}>{stateError}</p>}
        </Form.Field>
        <Button primary type="submit">
          Invite
        </Button>
      </Form>
    </>
  );
};

export default InviteMember;

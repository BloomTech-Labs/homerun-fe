import React from 'react';
import { Button, Form, Loader, Dimmer } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actions';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          <p className="perm-level-one">Level 1</p>
          <p className="perm-level-two">Level 2</p>
          <p className="perm-level-three">Level 3</p>
        </div>
        <div className="perm-feature-row">
          <p className="perm-table-title">Complete todos</p>
          <p className="perm-level-one">
            <i className="">
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </p>
          <p className="perm-level-two">
            <i className="">
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </p>
          <p className="perm-level-three">
            <i className="">
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </p>
        </div>
        <div className="perm-feature-row">
          <p className="perm-table-title">Create todos</p>
          <p className="perm-level-one">
            <i className="">
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </p>
          <p className="perm-level-two">
            <i className="">
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </p>
          <p className="perm-level-three">
            <i className="">
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </p>
        </div>
        <div className="perm-feature-row">
          <p className="perm-table-title">Edit todos</p>
          <p className="perm-level-one">
            <i className="">
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </p>
          <p className="perm-level-two">with restrictions</p>
          <p className="perm-level-three">
            <i className="">
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </p>
        </div>
        <div className="perm-feature-row">
          <p className="perm-table-title">Delete todos</p>
          <p className="perm-level-one">
            <i className="">
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </p>
          <p className="perm-level-two">with restrictions</p>
          <p className="perm-level-three">
            <i className="">
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </p>
        </div>
        <div className="perm-feature-row">
          <p className="perm-table-title">Assign self</p>
          <p className="perm-level-one">
            <i className="">
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </p>
          <p className="perm-level-two">with restrictions</p>
          <p className="perm-level-three">
            <i className="">
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </p>
        </div>
        <div className="perm-feature-row">
          <p className="perm-table-title">Assign others</p>
          <p className="perm-level-one">
            <i className="">
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </p>
          <p className="perm-level-two">
            <i className="">
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </p>
          <p className="perm-level-three">
            <i className="">
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </p>
        </div>
        <div className="perm-feature-row">
          <p className="perm-table-title">Invite members</p>
          <p className="perm-level-one">
            <i className="">
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </p>
          <p className="perm-level-two">
            <i className="">
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </p>
          <p className="perm-level-three">level 1-2</p>
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

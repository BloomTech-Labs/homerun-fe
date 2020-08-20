import React, { useState } from 'react';
import { Button, Form, Loader, Dimmer } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useForm from './editUseForm.js';
import permissionValidation from './permissionValidation.js';
import Name from './Name';
import axiosWithAuth from '../../utils/AxiosWithAuth.js';
import actions from '../../actions/index';

const EditPermissions = (props) => {
  const { handleChange, handleSubmit, data, errors } = useForm(
    onSubmit,
    permissionValidation
  );
  const stateError = useSelector((state) => state.household.error);
  const loadingState = useSelector((state) => state.household.loading);
  const dispatch = useDispatch();

  function onSubmit() {
    axiosWithAuth()
      .post(`${process.env.REACT_APP_BE_URL}/members/edit-permission`, {
        id: props.memberToEdit.id,
        permission_level: data.permissionLevel,
      })
      .then((res) => {
        dispatch(actions.houseHold.fetchHousehold());
        props.setModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return loadingState ? (
    <Dimmer active inverted>
      <Loader size="large">Loading</Loader>
    </Dimmer>
  ) : (
    <>
      <section className="items-center justify-center h-full mx-8 mt-8 tablet:mx-auto tablet:w-5/6 tablet:mt-16">
        <div className="perm-title-row">
          <p className="w-2/5 text-xs perm-table-title phone:text-sm tablet:text-base tablet:w-1/4">
            Permission Level
          </p>
          <p className="w-1/4 text-xs perm-title-one phone:text-sm tablet:text-base">
            Level 1
          </p>
          <p className="w-1/4 text-xs perm-title-two phone:text-sm tablet:text-base">
            Level 2
          </p>
          <p className="w-1/4 text-xs perm-title-three phone:text-sm tablet:text-base ">
            Level 3
          </p>
        </div>
        <div className="perm-feature-row">
          <p className="w-2/5 text-xs tablet:text-base perm-feature-title phone:text-sm tablet:w-1/4">
            Complete todos
          </p>
          <p className="w-1/4 text-xs text-green-600 perm-level-one phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </p>
          <p className="w-1/4 text-xs text-green-600 perm-level-two phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </p>
          <p className="w-1/4 text-xs text-green-600 perm-level-three phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </p>
        </div>
        <div className="perm-feature-row">
          <p className="w-2/5 text-xs tablet:text-base perm-feature-title phone:text-sm tablet:w-1/4">
            Create todos
          </p>
          <p className="w-1/4 text-xs text-hive-dark perm-level-one phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </p>
          <p className="w-1/4 text-xs text-green-600 perm-level-two phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </p>
          <p className="w-1/4 text-xs text-green-600 perm-level-three phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </p>
        </div>
        <div className="perm-feature-row">
          <p className="w-2/5 text-xs tablet:text-base perm-feature-title phone:text-sm tablet:w-1/4">
            Edit todos
          </p>
          <p className="w-1/4 text-xs text-hive-dark perm-level-one phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </p>
          <p className="w-1/4 text-xs perm-level-two phone:text-sm tablet:text-base">
            partial
          </p>
          <p className="w-1/4 text-xs text-green-600 perm-level-three phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </p>
        </div>
        <div className="perm-feature-row">
          <p className="w-2/5 text-xs tablet:text-base perm-feature-title phone:text-sm tablet:w-1/4">
            Delete todos
          </p>
          <p className="w-1/4 text-xs text-hive-dark perm-level-one phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </p>
          <p className="w-1/4 text-xs perm-level-two phone:text-sm tablet:text-base">
            partial
          </p>
          <p className="w-1/4 text-xs text-green-600 perm-level-three phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </p>
        </div>
        <div className="perm-feature-row">
          <p className="w-2/5 text-xs tablet:text-base perm-feature-title phone:text-sm tablet:w-1/4">
            Assign self
          </p>
          <p className="w-1/4 text-xs text-hive-dark perm-level-one phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </p>
          <p className="w-1/4 text-xs perm-level-two phone:text-sm tablet:text-base">
            partial
          </p>
          <p className="w-1/4 text-xs text-green-600 perm-level-three phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </p>
        </div>
        <div className="perm-feature-row">
          <p className="w-2/5 text-xs tablet:text-base perm-feature-title phone:text-sm tablet:w-1/4">
            Assign others
          </p>
          <p className="w-1/4 text-xs text-hive-dark perm-level-one phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </p>
          <p className="w-1/4 text-xs text-hive-dark perm-level-two phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </p>
          <p className="w-1/4 text-xs text-green-600 perm-level-three phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </p>
        </div>
        <div className="perm-feature-row">
          <p className="w-2/5 text-xs tablet:text-base perm-feature-title phone:text-sm tablet:w-1/4">
            Invite members
          </p>
          <p className="w-1/4 text-xs text-hive-dark perm-level-one phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </p>
          <p className="w-1/4 text-xs text-hive-dark perm-level-two phone:text-sm tablet:text-base">
            <i className="">
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </p>
          <p className="w-1/4 text-xs perm-level-three phone:text-sm tablet:text-base">
            level 1-2
          </p>
        </div>

        <h2 className="edit-level-header">
          Edit {props.memberToEdit.username + "'s"} Permission
        </h2>
        <div className="flex justify-between w-64 m-auto">
          <Name name={props.memberToEdit.username} />
          <div key={props.memberToEdit.username} className="flex">
            <label className="edit-level-label">Level</label>
            <span className="original-level">
              {props.memberToEdit.permission_level}
            </span>
          </div>
        </div>
      </section>
      <Form
        onSubmit={handleSubmit}
        className="flex justify-center m-auto edit-permission-form"
        noValidate
      >
        <div className="tablet:mb-8">
          <Form.Field className="">
            <label className="edit-permission-label">
              Please choose {props.memberToEdit.username + "'s"} new level of
              permission
            </label>
            <input
              type="number"
              name="permissionLevel"
              placeholder="1-3"
              min="1"
              max="3"
              onChange={handleChange}
            />
            {errors.permissionLevel && (
              <p className="pt-1 pl-3 text-red-700">{errors.permissionLevel}</p>
            )}
          </Form.Field>
          <Button type="submit" className="w-full edit-permission-button">
            Edit Permission
          </Button>
        </div>
      </Form>
    </>
  );
};

export default EditPermissions;

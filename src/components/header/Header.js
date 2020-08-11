import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../sidebar/Sidebar.js';
import { useLocation } from 'react-router-dom';
import actions from '../../actions/index.js';
import TITLES from './HeaderTitles';

import {
  Header as UiHeader,
  Button,
  Modal,
  Input,
} from 'semantic-ui-react';

const Header = (props) => {
  const [pinInput, setPinInput] = useState('');
  const [pinModal, setPinModal] = useState(false);
  // location is an object that contains the current url path on the 'pathname' property
  const location = useLocation();
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser.childActive === true) {
      setSidebarOpened(false);
    }
  }, [currentUser]);

  const handleChange = (e) => {
    e.persist();
    setPinInput(e.target.value);
  };

  const modalButtonClick = () => {
    // dispatch action for checking pin and changing the child boolean in state to false
    dispatch(actions.user.setChildActive(false));
    console.log(pinInput);
    setPinInput('');
    setPinModal(false);
  };

  return (
    <>
      <div className="header-container">
        <UiHeader as="h3" data-testid="title">
          {location.pathname === '/dashboard' && TITLES.DASHBOARD}
          {location.pathname === '/household' && TITLES.HOUSEHOLD}
        </UiHeader>
      </div>
      <Modal open={pinModal} data-testid="pin-modal">
        <Modal.Header>Admin Access</Modal.Header>
        <Modal.Description>
          You must enter the household pin to get access to user settings.
        </Modal.Description>
        <Modal.Content>
          <Input
            type="text"
            placeholder="Enter household pin"
            name="pin"
            value={pinInput}
            onChange={handleChange}
          />
          <Button
            onClick={modalButtonClick}
            primary
            content="Submit"
            data-testid="modal-button"
          />
        </Modal.Content>
      </Modal>
      <Sidebar setOpened={setSidebarOpened} opened={sidebarOpened} />
      {/* TODO -> background needs to be dimmed when settings is activated */}
    </>
  );
};

export default Header;

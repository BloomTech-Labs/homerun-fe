import React from "react";

import { button, Icon, Header, Input, Modal } from "semantic-ui-react";

const PinNumber = () => {
  return (
    <Modal
      trigger={
        <button className="header-btns">
          <Icon size="big" aria-hidden="true" className="map pin" />
        </button>
      }
    >
      <Modal.Header>Enter Pin</Modal.Header>
      <Modal.Content image>
        <Input placeholder="Pin" type="password" />
        <button>Submit</button>
      </Modal.Content>
    </Modal>
  );
};

export default PinNumber;

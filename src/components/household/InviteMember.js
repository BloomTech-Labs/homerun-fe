import React from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react';

const InviteMember = (props) => {

  const onSubmit = (e) => {
    e.preventDefault();
    props.setMemberModal(false);
  }
    return (
            <Form>
              <Form.Field>
                <label>Email</label>
                <input placeholder='user@email.com' />
              </Form.Field>
              <Button floated='right' primary onClick={onSubmit} type='submit'>Invite</Button>
            </Form>
          )
}

export default InviteMember;
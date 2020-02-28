import React from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react';

const HouseholdForm = () => {

    return (
            <Form>
              <Form.Field>
                <label>Name</label>
                <input placeholder='Member' />
              </Form.Field>
              <Form.Field>
                <Checkbox label='Child?' />
              </Form.Field>
              <Button type='submit'>Add</Button>
            </Form>
          )
}

export default HouseholdForm;
import React from 'react';

import { Form, Input, Icon } from 'semantic-ui-react';


const TodoForm = () => {

    return (
        <Form>
            <Form.Field width='13' >
                <label>task</label>
                <Input id='form-input-control-task' placeholder='Task' type='text'/>
                <Icon name='add user' />
                <Icon name='clock' />
            </Form.Field>
        </Form>
    );
}

export default TodoForm;
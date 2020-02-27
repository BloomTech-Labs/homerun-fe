import React from 'react';

import { Form, Input, Icon } from 'semantic-ui-react';


const TodoForm = () => {

    return (
        <form className='ui right icon input'>
            <input type='text' placeholder='Task' />
            <button className='ui primary button'><i aria-hidden="true" className='add user icon'></i></button>
            <button className='ui positive button'><i aria-hidden="true" className='clock icon'></i></button>
        </form>
        // <Input icon='add user' iconPosition='right' />
    );
}

export default TodoForm;
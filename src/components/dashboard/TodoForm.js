import React from 'react';

import { Form, Input, Icon } from 'semantic-ui-react';

import '../../SASS/TaskForm.scss';

const TodoForm = () => {

    return (
        <form className='ui right icon input taskForm'>
            <input type='text' placeholder='Task' />
            <button className='ui primary button'><i aria-hidden="true" className='add user icon'></i></button>
            <button className='ui positive button'><i aria-hidden="true" className='clock icon'></i></button>
            <button><i aria-hidden="true" className='checkmark icon'></i></button>
        </form>
    );
}

export default TodoForm;
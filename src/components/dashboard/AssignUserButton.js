import React from 'react';

import { Icon, Button, Dropdown } from 'semantic-ui-react';

const AssignUserButton = () => {
    // hard coding options for now but once we can get the endpoint for getting household members the options part will need to be updated
    const options = [
        { key: 'memberId', text: 'Mom', value: 'Mom' },
        { key: 'memberId', text: 'Dad', value: 'Dad' },
        { key: 'memberId', text: 'Daughter', value: 'Daughter' },
        { key: 'memberId', text: 'Son', value: 'Son' },
    ]
    return (
        <Dropdown button multiple options={options} className='assign-user' icon='add user' />
    )
}


export default AssignUserButton;
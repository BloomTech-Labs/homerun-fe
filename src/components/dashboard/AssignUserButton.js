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
        <>
        <Dropdown button selection multiple options={options} className='assign-user' icon='add user' />
        <div className='ui icon button'>
            <i aria-hidden="true" class="add user icon"></i>
            <select className='ui dropdown fluid selection assign-users'>
                <option value='mom'>Mom</option>
                <option value='dad'>Dad</option>
                <option value='daughter'>Daughter</option>
            </select>
        </div>
      
        </>
    )
}


export default AssignUserButton;
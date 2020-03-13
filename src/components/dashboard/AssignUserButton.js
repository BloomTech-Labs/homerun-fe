import React from 'react';

import { Icon, Button, Dropdown } from 'semantic-ui-react';

const AssignUserButton = () => {

    return (
        // <Dropdown button multiple options={options} className='assign-user' icon='add user' />
        <select className='ui dropdown'>
            <option value='mom'>Mom</option>
            <option value='dad'>Dad</option>
            <option value='daughter'>Daughter</option>
        </select>
    )
}


export default AssignUserButton;
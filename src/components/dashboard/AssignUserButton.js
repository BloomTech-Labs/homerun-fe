import React from 'react';

import { Icon, Button, Dropdown } from 'semantic-ui-react';

const AssignUserButton = () => {
    // hard coding options for now but once we can get the endpoint for getting household members the options part will need to be updated
    const options = [
        { key: '1', text: 'Mom', value: 'Mom' },
        { key: '2', text: 'Dad', value: 'Dad' },
        { key: '3', text: 'Daughter', value: 'Daughter' },
        { key: '4', text: 'Son', value: 'Son' },
    ]
    return (
        <>
        <Dropdown selection multiple options={options} icon='add user' />
        {/* <div className='ui icon button'>
            <select multiple='' className='ui dropdown fluid'>
                <option value='mom'>Mom</option>
                <option value='dad'>Dad</option>
                <option value='daughter'>Daughter</option>
            </select>
        </div> */}
      
        </>
    )
}


export default AssignUserButton;
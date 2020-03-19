import React from 'react';

import { Icon, Button, Dropdown } from 'semantic-ui-react';

const options = [
    { key: '1', text: 'Mom', value: 'Mom' },
    { key: '2', text: 'Dad', value: 'Dad' },
    { key: '3', text: 'Daughter', value: 'Daughter' },
    { key: '4', text: 'Son', value: 'Son' },
]

const AssignUserButton = () => {

    return (
        <Dropdown button multiple options={options} style={{ zIndex: 50 }} />
        // <select className='ui dropdown'>
        //     <option value='mom'>Mom</option>
        //     <option value='dad'>Dad</option>
        //     <option value='daughter'>Daughter</option>
        // </select>
    )
}


export default AssignUserButton;
import React from 'react';


import { button, Icon } from 'semantic-ui-react';

const AccountSettings = (props) => {

    return (
        <button onClick={() => props.setSettingsOn(!props.settingsOn)} className='header-btns'>
            <Icon className='icons-size' size='big' name='user circle' />
        </button>

    )
}

export default AccountSettings;
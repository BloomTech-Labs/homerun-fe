import React from 'react';

import { Button, Icon } from 'semantic-ui-react';

const AccountSettings = (props) => {

    return (
        <button onClick={() => props.setSettingsOn(!props.settingsOn)} className='header-btns'>
             <Icon size='big' name='user circle'/>
        </button>
    )
}

export default AccountSettings;
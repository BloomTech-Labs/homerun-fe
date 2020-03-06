import React, { useState } from 'react';
import Dropdown from './Dropdown.js';
import AccountSettings from '../header/AccountSettings.js';

import { Menu, Icon } from 'semantic-ui-react';

const Settings = () => {
   
    return (
        <>
        <Menu.Item as='a'><Icon name='home' />Home</Menu.Item>
        <Menu.Item as='a'><Icon name='gamepad' />Games</Menu.Item>
        <Menu.Item as='a'><Icon name='camera' />Channels</Menu.Item>
        <Dropdown />
        </>

    )
}

export default Settings;
import React, { useState } from 'react';
import Dropdown from './Dropdown.js';
import AccountSettings from '../header/AccountSettings.js';

import { Sidebar, Segment, Menu,  Header, Icon, Image } from 'semantic-ui-react';

const Settings = () => {
    const [visible, setVisible] = useState(false);
    return (
        <Sidebar.Pushable as={Segment}>
            <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                onHide={() => setVisible(false)}
                vertical
                visible={visible}
                width='thin'
            >
                <Menu.Item as='a'><Icon name='home' />Home</Menu.Item>
                <Menu.Item as='a'><Icon name='gamepad' />Games</Menu.Item>
                <Menu.Item as='a'><Icon name='camera' />Channels</Menu.Item>
                <Dropdown />
            </Sidebar>
        </Sidebar.Pushable>

    )
}

export default Settings;
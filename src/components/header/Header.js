import React, {useState} from 'react';

import AccountSettings from './AccountSettings.js';
import Notifications from './Notifications.js';
import PinNumber from './PinNumber.js';
import Settings from '../allSettings/Settings.js';

import '../../SASS/Header.scss';

import { useLocation } from 'react-router-dom';

import { Header as UiHeader, Icon, Image, Sidebar, Segment, Menu } from 'semantic-ui-react';

const Header = () => {
    // location is an object that contains the current url path on the 'pathname' property
    const location = useLocation();

    const [settingsOn, setSettingsOn] = useState(false);

    return (
        <div className='header-container'>
            {location.pathname === '/household' ? <PinNumber /> : <Notifications />}
            <UiHeader as='h3'>
               { location.pathname === '/household' ? 'Setup Household' : 'Dashboard' }
            </UiHeader>
            <AccountSettings />
        </div>
    )
}

export default Header;
import React, { useState } from 'react';
import Sidebar from '../sidebar/Sidebar.js';
import { useLocation } from 'react-router-dom';
import TITLES from './HeaderTitles';

import { Header as UiHeader } from 'semantic-ui-react';

const Header = (props) => {
  // location is an object that contains the current url path on the 'pathname' property
  const location = useLocation();
  const [sidebarOpened, setSidebarOpened] = useState(false);

  return (
    <>
      <div className="header-container">
        <UiHeader as="h3" data-testid="title">
          {location.pathname === '/dashboard' && TITLES.DASHBOARD}
          {location.pathname === '/household' && TITLES.HOUSEHOLD}
        </UiHeader>
      </div>
      <Sidebar setOpened={setSidebarOpened} opened={sidebarOpened} />
      {/* TODO -> background needs to be dimmed when settings is activated */}
    </>
  );
};

export default Header;

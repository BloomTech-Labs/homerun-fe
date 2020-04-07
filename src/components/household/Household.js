import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import List from "./List";

import '../../SASS/Household.scss';

import { Button, Icon } from 'semantic-ui-react';
import { NavLink, Redirect } from 'react-router-dom';

const Household = () => {

    return (
        <div className='household container'>
            <Button>Join Household?</Button>
            <List />
            <NavLink to='/dashboard'>
                <Button animated>
                    <Button.Content visible>
                        Dashboard
                    </Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
            </NavLink>
        </div>
    )
}

 



export default Household;

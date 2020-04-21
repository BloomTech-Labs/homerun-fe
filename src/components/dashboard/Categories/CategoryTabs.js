import React, { useState } from 'react';

import { Menu, Segment } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../actions/';

const CategoryTabs = () => {    
    const [active, setActive] = useState('all')
    const dispatch = useDispatch();
    // living room, bedroom, kitchen, bathroom

    const handleClick = (e, { name }) => {
        e.preventDefault();
        dispatch(actions.todo.categorizeTodos(name));
        setActive(name);
    }
    return (
        <div>
            <Menu pointing secondary>
                <Menu.Item name='all' active={active === 'all'} onClick={handleClick} />
                <Menu.Item name='living room' active={active === 'living room'} onClick={handleClick} />
                <Menu.Item name='bedroom' active={active === 'bedroom'} onClick={handleClick} />
                <Menu.Item name='kitchen' active={active === 'kitchen'} onClick={handleClick} />
                <Menu.Item name='bathroom' active={active === 'bathroom'} onClick={handleClick} />
            </Menu>
        </div>
    )
}

export default CategoryTabs;
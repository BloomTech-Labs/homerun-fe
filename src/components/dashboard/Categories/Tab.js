import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Badge } from 'antd';


const Tab = (props) => (
                <Menu.Item name={props.name} active={props.active} onClick={props.handleClick}>
                        {props.name.toUpperCase()}
                </Menu.Item>
    )

export default Tab;
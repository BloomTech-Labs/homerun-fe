import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Badge } from 'antd';


const Tab = (props) => (
                <Menu.Item name={props.name} active={props.active} onClick={props.handleClick}>
                    <Badge offset={[10, 0]} count={props.counts}>
                        {props.name.toUpperCase()}
                    </Badge>
                </Menu.Item>
    )

export default Tab;
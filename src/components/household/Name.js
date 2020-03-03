import React from "react";

import { Image, List } from 'semantic-ui-react';

const Name = (props) => {

    return (
        <List.Item>
            <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
            <List.Content>
                <List.Header>{props.name}</List.Header>
            </List.Content>
        </List.Item>
    )
}


export default Name;
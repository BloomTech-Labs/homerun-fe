import React from "react";
import { List, Icon } from 'semantic-ui-react'; 


const SwipeRight = () => {
    
    return (
        <List.Item className = "swipe-right">
            <Icon aria-hidden="true" className = "check"  size='small' />
        </List.Item>
    )
}

export default SwipeRight;
import React from "react";
import { List, Icon } from 'semantic-ui-react'; 


// const swipeRightData = () => {
//     content: (
//       <ItemContent
//         icon= {<SwipeRight/>}
//         label="Complete"
//         side="right"
//         color="green"
//       />
// }

const SwipeRight = () => {
    
    return (
        <List.Item>
            <Icon aria-hidden="true" className = "checkmark"  size='massive' />
        </List.Item>
    )
}

export default SwipeRight;
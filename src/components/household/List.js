import React from "react";
import Name from "./Name";
import { Button, Modal } from 'semantic-ui-react';

const List = () => {

        return (
            <div>
                <Name />
                <Modal
                    trigger={<Button>Add Member</Button>}
                    header='Reminder!'
                    content='Call Benjamin regarding the reports.'
                    actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
  />            </div>
        )
    }


export default List;
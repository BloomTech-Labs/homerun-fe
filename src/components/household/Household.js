import React from "react";
import List from "./List";
import HouseholdForm from "./HouseholdForm";

import { Button, Icon } from 'semantic-ui-react';

const Household = () => {

    return (
        <div>
            <Button>Join Household?</Button>
            <List />
            <Button animated>
                <Button.Content visible>
                    Dashboard
                </Button.Content>
                <Button.Content hidden>
                    <Icon name='arrow right' />
                </Button.Content>
            </Button>
        </div>
    )
}

 



export default Household;
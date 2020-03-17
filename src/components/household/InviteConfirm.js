import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from "react-router";
import { Loader, Dimmer } from 'semantic-ui-react';


export const InviteConfirm = () => {
    const [loading, setLoading] = useState(true);
    const { householdID } = useParams();
    const { history } = useHistory();

    useEffect(() => {
        axios.put('https://stage-homerun-be.herokuapp.com/member', { householdID }) 
            .then(res => {
                // should be getting back the updated user with the new household assigned to them
                console.log(res);
                // save the data for the user however we need it asdf


                // user should be directed to the household if they successfully accepted invite
                history.push('/household');
            })
            .catch(err => {
                console.log(err); 
            })
    }, [])

   return loading ? <Dimmer active inverted><Loader size="large">Loading</Loader></Dimmer> : null
}
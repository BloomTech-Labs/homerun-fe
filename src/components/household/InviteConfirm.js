import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../utils/AxiosWithAuth.js';
import { useParams, useHistory } from "react-router-dom";
import { Loader, Dimmer } from 'semantic-ui-react';

export const InviteConfirm = () => {
    const [loading, setLoading] = useState(true);
    const { hash, householdId } = useParams();
    const history = useHistory();

    useEffect(() => {
        axiosWithAuth().put('/members', { hash, householdId })
            .then(res => {
                // should be getting back the updated user with the new household assigned to them
                console.log("InviteConfirm -> res", res)
                // clear the storage so we can start fresh
                localStorage.clear();
                // save the data for the user however we need it
                localStorage.setItem('token', res.data.token);

                // user should be directed to the household if they successfully accepted invite
                history.push('/household');
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return loading ? <Dimmer active inverted><Loader size="large">Loading</Loader></Dimmer> : null
}
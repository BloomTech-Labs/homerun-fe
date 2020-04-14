import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../utils/AxiosWithAuth.js';
import { useParams, useHistory } from "react-router-dom";
import { Loader, Dimmer } from 'semantic-ui-react';

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJlbWFpbCI6ImRhZEB0ZXN0LmNvbSIsImN1cnJlbnRfaG91c2Vob2xkIjoiYTEyMzQ1IiwiaWF0IjoxNTg0NjcxMzE1LCJleHAiOjE1ODUyNzYxMTV9.oa4zKAXAWcWhEWZc-mNW8GP5bNTbFOkr-NkVhUNK4wk
export const InviteConfirm = () => {
    const [loading, setLoading] = useState(true);
    const { hash, householdId } = useParams();
    const history  = useHistory();

    useEffect(() => {
        axiosWithAuth().put('/members', { hash, householdId }) 
            .then(res => {
                // should be getting back the updated user with the new household assigned to them
                console.log("InviteConfirm -> res", res)
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
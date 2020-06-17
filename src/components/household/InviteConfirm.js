import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/AxiosWithAuth.js";
import { useParams, useHistory } from "react-router-dom";
import { Loader, Dimmer } from "semantic-ui-react";

export const InviteConfirm = () => {
  const [loading, setLoading] = useState(true);
  const { hash, householdId } = useParams();
  const history = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .put("/members", { hash, householdId })
      .then((res) => {
        // clear the storage so we can start fresh
        localStorage.clear();
        // save the data for the user however we need it
        localStorage.setItem("token", res.data.token);

        // user should be directed to the household if they successfully accepted invite
        history.push("/household");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return loading ? (
    <Dimmer active inverted data-testid="dimmer">
      <Loader size="large">Loading</Loader>
    </Dimmer>
  ) : null;
};
